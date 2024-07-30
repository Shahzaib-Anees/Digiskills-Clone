import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWAifcM69HK0Khj_jjuHC3pnkD_54nlZM",
    authDomain: "digiskills-96385.firebaseapp.com",
    projectId: "digiskills-96385",
    storageBucket: "digiskills-96385.appspot.com",
    messagingSenderId: "595663190317",
    appId: "1:595663190317:web:94792cff1ea5c85743fba4",
    measurementId: "G-EHT4J866KM"
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