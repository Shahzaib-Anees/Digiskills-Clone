import { app, getAuth, signInWithEmailAndPassword } from "./libs/firebase.js"
import { loader } from "./ext.js";

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
const docLoader = document.getElementById("loader");

signInForm.addEventListener("submit",async (evt) => {
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
        console.log(user);
        console.log("user signed in");
        loader("Signed In Successfully");
        docLoader.style.display = "flex";
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorHandler(errorCode);
        setTimeout(() => {
            location.reload();
        }, 2000)
    }finally{
        setTimeout(()=>{
            docLoader.style.display = "none";
            location.assign("./../Profile/profile.html")
        },2000);
    }
})