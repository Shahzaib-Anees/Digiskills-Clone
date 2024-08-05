import { app, getAuth, createUserWithEmailAndPassword } from "./libs/firebase.js";
const auth = getAuth(app);
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from "./libs/firebase.js";
const db = getFirestore(app);
import { loader } from "./ext.js";


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
        popUpBtn.style.backgroundColor = "red";
        popUpBtn.addEventListener("click", () => {
            location.reload();
        })
    } else {
        console.log("Failed to execute Pop Up function");
    }
    popUpWindow.style.display = "flex";
}

const createNewUserInDataBase = async (uid, firstName, lastName, email, password) => {
    try {
        await setDoc(doc(db, "users", uid), {
            firstName,
            lastName,
            email,
            password,
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
