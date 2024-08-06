
//ADICIONE SEUS LINKS FIREBASE 
const firebaseConfig = {
  apiKey: "AIzaSyCJCQxZciN2MdTlINVeOHtkkNQ7d2KUZiw",
  authDomain: "c-94-ccc8b.firebaseapp.com",
  databaseURL: "https://c-94-ccc8b-default-rtdb.firebaseio.com",
  projectId: "c-94-ccc8b",
  storageBucket: "c-94-ccc8b.appspot.com",
  messagingSenderId: "482081176130",
  appId: "1:482081176130:web:1403dd355b8577e818cbdb"
};
 
firebase.initializeApp(firebaseConfig);


  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
