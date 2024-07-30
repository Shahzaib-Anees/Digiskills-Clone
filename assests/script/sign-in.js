import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyD86pOHR7yFjlGf1z6E86Jm_j9TZcFWIwg",
    authDomain: "digiskills-e1f44.firebaseapp.com",
    projectId: "digiskills-e1f44",
    storageBucket: "digiskills-e1f44.appspot.com",
    messagingSenderId: "90066126392",
    appId: "1:90066126392:web:4c84e3b6355b427d8688cd",
    measurementId: "G-EB84SDCMTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


// Doms 
const errorHandler = (error) => {
    const errorHandlerDom = document.getElementById("error-handler");
    const errorText = document.getElementById("error");
    let errorUpperCase = error.toUpperCase();
    errorText.innerText = errorUpperCase;
    errorHandlerDom.style.display = "flex";

    document.getElementById("error-handler-remover").addEventListener("click", _ => {
        errorHandlerDom.style.display = "none";
    })
}

const signInFormContainer = document.getElementById("sign-in-container");
const registrationFormContainer = document.getElementById("reg-container");
const signInForm = document.getElementById("sign_in_form");
const registrationForm = document.getElementById("registration-form");
const authHeader = document.getElementById("auth-header");
const regPath = document.getElementById("registration-path");
regPath.addEventListener("click", () => {
    signInFormContainer.style.display = "none";
    authHeader.style.display = "flex";
    registrationFormContainer.style.display = "flex";
    console.log("Registration Path Clicked");
})

signInForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const submitBtn = document.getElementById("sign-in-btn");
    submitBtn.disabled = true;
    submitBtn.classList.add("fade");
    const submitBtnText = document.getElementById("sign-in-btn-text");
    const submitBtnTLoader = document.getElementById("sign-in-btn-loader");
    const signInEmail = document.getElementById("sign-in-email").value;
    const signInPassword = document.getElementById("sign-in-password").value;
    if (signInEmail === "" || signInPassword === "") {
        return alert("Invalid User Credentials")
    }
    submitBtnText.innerText = `Processing`;
    submitBtnTLoader.classList.add("rotate");
    submitBtnTLoader.style.display = "block";

    console.log(signInEmail, signInPassword);
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log("user signed in");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            errorHandler(errorCode);
            setTimeout(() => {
                location.reload();
            }, 2000)
        })
})