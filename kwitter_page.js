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
 
var room_name=localStorage.getItem("nameroom");
name_user=localStorage.getItem("username");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }


getData();

function send()
{
      msg =document.getElementById("send").value;
      firebase.database().ref(room_name).push({
            name:name_user,
            message:msg,
            like:0
      });

      document.getElementById("send").value="";
}


