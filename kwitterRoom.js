

Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app"; 
 TODO: Add SDKs for Firebase products that you want to use 
https:firebase.google.com/docs/web/setup#available-libraries
 Your web app's Firebase configuration const firebaseConfig = {
   apiKey: "AIzaSyACLc6urtCA37Sawoy-_bcAVrtfcH9OaJA", authDomain: 
   "vamosconversar-9ac54.firebaseapp.com", projectId:
    "vamosconversar-9ac54", storageBucket: 
    "vamosconversar-9ac54.appspot.com", messagingSenderId:
     "516616965212", appId:
      "1:516616965212:web:306fb307647d8ec5d26a99" };
       // Initialize Firebase const app = initializeApp(firebaseConfig);
        {
        apiKey: "AIzaSyDXw9qF23-bWTGRtFa1drVQTh1zFUynMzc",
        authDomain: "web-site-8d70f.firebaseapp.com",
        databaseURL: "https://web-site-8d70f-default-rtdb.firebaseio.com",
        projectId: "web-site-8d70f",
        storageBucket: "web-site-8d70f.appspot.com",
        messagingSenderId: "304059827466",
        appId: "1:304059827466:web:9f69b69c99d74cf2f9a6f3"}; 
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
