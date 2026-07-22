import { auth } from "./firebase.js";

import {

createUserWithEmailAndPassword,

updateProfile

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const signupBtn=document.getElementById("signupBtn");

signupBtn.addEventListener("click",async()=>{

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

const userCredential=await createUserWithEmailAndPassword(auth,email,password);

await updateProfile(userCredential.user,{

displayName:name

});

alert("Account Created Successfully!");

window.location.href="login.html";

}catch(error){

alert(error.message);

}

});
