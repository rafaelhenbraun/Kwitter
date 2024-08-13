const firebaseConfig = {
    apiKey: "AIzaSyC50VqfjL5k8xBCn96O2524IXtQ16n15MI",
    authDomain: "vamos-conversar-29f95.firebaseapp.com",
    databaseURL: "https://vamos-conversar-29f95-default-rtdb.firebaseio.com",
    projectId: "vamos-conversar-29f95",
    storageBucket: "vamos-conversar-29f95.appspot.com",
    messagingSenderId: "343739021831",
    appId: "1:343739021831:web:214458355cec6b13f308a2"
  };
  
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  //escreva a função send aqui
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:userName,
      message:msg,
      like:0
    });

    document.getElementById("msg").value = "";
  }
  
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
           console.log(firebaseMessageId);
           console.log(messageData);
           name = messageData['name'];
           message = messageData['message'];
           like = messageData['like'];
           nameWithTag = "<h4>"+ name + "<img class='user-tik' src= 'tick.png'></h4>";
           messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
           likeButton = "<button class='btn btn-warning' id="+firebaseMessageId + "value="+like+"onclick='updateLike(this.id)'>";
           spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

           row = nameWithTag + messageWithTag +likeButton + spanWithTag;
           document.getElementById("output").innerHTML += row;
          
  //End code
  } }); }); }
  getData();
     
  
  function updateLike(message_id)
  {
    console.log("botão like pressionado -" + messageId);
    button_id = messageId;
    likes = document.getElementById(button_id).value;
    updateLikes = Number(likes) + 1;
    console.log(updateLikes);

    firebase.database().ref(roomName).child(messageId).update({
      like : updateLikes
     });
  
  }
  
  function logout() {
  localStorage.removeItem("userName");
  localStorage.removeitem("roomName");
  window.location.replace("index.html");
  }