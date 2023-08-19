var firebaseConfig = {
      apiKey: "AIzaSyDM1oP7AqV7Gjilqe-zei1bXgmf0UwsRRg",
      authDomain: "kwitter-9bacf.firebaseapp.com",
      databaseURL: "https://kwitter-9bacf-default-rtdb.firebaseio.com",
      projectId: "kwitter-9bacf",
      storageBucket: "kwitter-9bacf.appspot.com",
      messagingSenderId: "441334316201",
      appId: "1:441334316201:web:381b4a9b5543bd4cf8fdb8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome Dear " + user_name + "!"
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;Room_names = childKey;
      //Start code
      console.log("Room name -  ",Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
            {
                  purpose: "adding room name"
            }
      );
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
