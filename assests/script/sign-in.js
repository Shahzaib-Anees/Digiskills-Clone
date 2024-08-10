import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "./libs/firebase.js"
import { loader } from "./ext.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
        if (localStorage.getItem("currentUser") !== null) {
            let alreadyLoggedUser = localStorage.getItem("currentUser");
            location.replace("../Profile/profile.html"
            )
            return;
        }
        const uid = user.uid;
        localStorage.setItem("currentUser", `${uid}`)
        // ...
    } else {
        // User is signed out
        console.log("No User Logged In");
        // ...
    }
});



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
const docLoader = document.getElementById("loader");

signInForm.addEventListener("submit", async (evt) => {
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
    try {
        const userCredential = await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        const user = userCredential.user;
        loader("Signed In Successfully");
        docLoader.style.display = "flex";
        location.replace("./../Profile/profile.html");
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorHandler(errorCode);
        setTimeout(() => {
            location.reload();
        }, 2000)
    } finally {
        setTimeout(() => {
            docLoader.style.display = "none";
        }, 2000);
    }
})