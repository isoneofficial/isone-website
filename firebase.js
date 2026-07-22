// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyDChtZ53ffjH6w10tTF8NS5VbW0lWmJpjk",

  authDomain: "is-one-36ebc.firebaseapp.com",

  projectId: "is-one-36ebc",

  storageBucket: "is-one-36ebc.firebasestorage.app",

  messagingSenderId: "446720779948",

  appId: "1:446720779948:web:c71b5f98d347e21647a109",

  measurementId: "G-QX9LVCHFFE"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
