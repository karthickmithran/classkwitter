
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


    function addRoom(){
room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


//user_name=localStorage.getItem("user_name");
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
console.log("Room_names"+Room_names);

      //End code
      });});}
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="kwitter.html";
          }
getData();