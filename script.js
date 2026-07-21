// ================================

// IS ONE Official Website

// script.js

// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("IS ONE Website Loaded Successfully.");

    // Current Year

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    // Welcome Message

    console.log("Welcome to IS ONE");

});

// Simple Button Function

function showMessage() {

    alert("Welcome to IS ONE Official Website!");

}
