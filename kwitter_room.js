
var firebaseConfig = {
      apiKey: "AIzaSyBzSEKqjgeRepvJEd9U7S3qXj5zWD_Ti2Y",
      authDomain: "kwitter-2e2b7.firebaseapp.com",
      databaseURL: "https://kwitter-2e2b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e2b7",
      storageBucket: "kwitter-2e2b7.appspot.com",
      messagingSenderId: "481431714051",
      appId: "1:481431714051:web:b248c00bfc130043f29136"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
 name_user=localStorage.getItem("username");
 function add_room()
 {
       roomname=document.getElementById("room_name").value;
      localStorage.setItem("nameroom",roomname);
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding_room_name"
      });
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div onclick='go_into_room(this.id)' class='room_name'  id='"+Room_names+"'>"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

//End code
      });});}

getData();
function go_into_room(name)
{
console.log(name);
window.location="kwitter_page.html";
localStorage.setItem("nameroom",roomname);
}
