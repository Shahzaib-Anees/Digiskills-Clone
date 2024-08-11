import { auth, createUserWithEmailAndPassword } from "./libs/firebase.js";

import { setDoc, doc , db } from "./libs/firebase.js";
import { loader } from "./ext.js";


// OnLoad 
// document.body.addEventListener("load", () => {
//     skillyRobo("../assests/Media/digiskills-robot.png", "reg-container");
// })


// Dom Requisites 
const signUpBtn = document.getElementById("sign-up-btn");
const signUpBtnRotater = document.getElementById("rotater");
const signUpBtnText = document.getElementById("sign-up-btn-txt")

// PopUp 
const popUp = (popUpState, errorCode = "An Unknown error occured") => {
    const popUpWindow = document.getElementById("pop-up-window");
    const popUpText = document.getElementById("popup-text");
    const popUpBtn = document.getElementById("pop-up-btn");
    if (popUpState === "registered") {
        popUpText.innerText = "Registered Successfully !";
        popUpBtn.innerText = "Go to Log In";
        popUpBtn.addEventListener("click", () => {
            location.replace("./../Auth-Log/sign_in.html")
        })
    } else if (popUpState === "error") {
        popUpText.innerText = errorCode;
        popUpBtn.innerText = "Retry";
        popUpBtn.style.backgroundColor = "#ED4337";
        popUpBtn.addEventListener("click", () => {
            location.reload();
        })
    } else {
        console.log("Failed to execute Pop Up function");
    }
    popUpWindow.style.display = "flex";
}

const createNewUserInDataBase = async (uid, firstName, lastName, email, password , imageUrl="https://firebasestorage.googleapis.com/v0/b/digiskills-96385.appspot.com/o/user-profile-collection%2Fmale_avatar-removebg-preview.png?alt=media&token=a65bdbdb-8a8f-4132-ac18-7d48a8c3cf3a") => {
    try {
        await setDoc(doc(db, "users", uid), {
            firstName,
            lastName,
            email,
            password,
            imageUrl,
        });
        console.log("Document written with ID: ", uid);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

// Registration 
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    signUpBtnRotater.classList.add("rotate");
    signUpBtnRotater.style.display = "inline-block";
    signUpBtnText.innerText = "Processing ..."
    signUpBtn.setAttribute("disabled", "true");
    signUpBtn.classList.add("fade");
    const regFirsName = document.getElementById("reg-first-name").value;
    const regLastName = document.getElementById("reg-last-name").value;
    const regEmail = document.getElementById("reg-email").value;
    const regPassword = document.getElementById("reg-password").value;

    if (regFirsName === "" || regLastName === "" || regEmail === "" || regPassword === "") {
        return alert("Enter valid Informations")
    }

    const docLoader = document.getElementById("loader");
    // Create User 
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, regEmail, regPassword)
        const user = userCredential.user;
        const userId = user.uid;
        console.log(user);
        createNewUserInDataBase(userId, regFirsName, regLastName, regEmail, regPassword);
        console.log("New User in DataBase");
        loader("Registered Successfully");
        docLoader.style.display = "flex";
        popUp("registered");
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        console.log(errorCode);
        popUp("error", errorCode);
    } finally {
        setTimeout(() => {
            docLoader.style.display = "none";
        }, 2000);
    }
})
console.log(db);
