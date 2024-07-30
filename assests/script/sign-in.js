import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
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

const signInForm = document.getElementById("sign_in_form");
const regPath = document.getElementById("registration-path");

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

export{errorHandler}