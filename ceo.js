// ceo.js

function ceoLogin() {

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value;

    // CEO Login

    if (username === "IS ONE CEO" && password === "123456") {

        alert("Welcome CEO!");

        window.location.href = "ceo-dashboard.html";

    } else {

        alert("Wrong Username or Password!");

    }

}
