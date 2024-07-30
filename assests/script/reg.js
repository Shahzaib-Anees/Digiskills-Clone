import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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



const registrationForm = document.getElementById("registration-form");


registrationForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const regFirsName = document.getElementById("reg-first-name").value;
    const regLastName = document.getElementById("reg-last-name").value;
    const regEmail = document.getElementById("reg-email").value;
    const regPassword = document.getElementById("reg-password").value;

    if (regFirsName === "" || regLastName === "" || regEmail === "" || regPassword === "") {
        return alert("Enter valid Informations")
    }

    console.log(regFirsName , regLastName , regPassword);
    createUserWithEmailAndPassword(auth, regEmail, regPassword)
        .then((userCredential) => { 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // ..
        });

})