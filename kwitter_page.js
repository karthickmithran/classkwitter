//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBGswYvBghFN2HxofUZOKLG0QfgIDLN6zc",
      authDomain: "kwitter-4977c.firebaseapp.com",
      databaseURL: "https://kwitter-4977c-default-rtdb.firebaseio.com",
      projectId: "kwitter-4977c",
      storageBucket: "kwitter-4977c.appspot.com",
      messagingSenderId: "185039075076",
      appId: "1:185039075076:web:a98e79386c9b2b8b0cc251"
    };
  
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send(){
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
       document.getElementById("msg").value="";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
    }
