import { auth } from "./firebase.js";

import {

onAuthStateChanged,

signOut

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const username=document.getElementById("username");

const logoutBtn=document.getElementById("logoutBtn");

onAuthStateChanged(auth,(user)=>{

if(user){

username.innerHTML="Welcome, "+(user.displayName||user.email);

}else{

window.location.href="login.html";

}

});

logoutBtn.addEventListener("click",async()=>{

await signOut(auth);

window.location.href="login.html";

});
