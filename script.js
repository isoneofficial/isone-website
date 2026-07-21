// ==========================

// IS ONE Website Script

// Version 1.0

// ==========================

console.log("IS ONE Website Loaded Successfully");

// Welcome Message

window.onload = function () {

    console.log("Welcome to IS ONE");

};

// Button Click Effect

function showMessage() {

    alert("Welcome to IS ONE Official Website!");

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Scroll Animation

window.addEventListener("scroll", function () {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

});

console.log("IS ONE Premium Script Active");
