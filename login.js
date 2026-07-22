import { auth } from "./firebase.js";

import {

  RecaptchaVerifier,

  signInWithPhoneNumber

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Create reCAPTCHA

window.recaptchaVerifier = new RecaptchaVerifier(

  auth,

  "recaptcha-container",

  {

    size: "normal"

  }

);

window.recaptchaVerifier.render();

// Send OTP

window.sendOTP = async function () {

  let phone = document.getElementById("phone").value.trim();

  if (!phone.startsWith("+")) {

    phone = "+88" + phone;

  }

  try {

    const confirmationResult =

      await signInWithPhoneNumber(

        auth,

        phone,

        window.recaptchaVerifier

      );

    window.confirmationResult = confirmationResult;

    alert("OTP Sent!");

    document.getElementById("otpBox").style.display = "block";

  } catch (e) {

    alert(e.message);

  }

};

// Verify OTP

window.verifyOTP = async function () {

  const otp = document.getElementById("otp").value;

  try {

    await window.confirmationResult.confirm(otp);

    alert("Login Successful");

    window.location.href = "dashboard.html";

  } catch (e) {

    alert("Invalid OTP");

  }

};
