import { app, getAuth, createUserWithEmailAndPassword } from "./libs/firebase.js";
const auth = getAuth(app);
import { getFirestore, collection, addDoc, getDocs } from "./libs/firebase.js";
const db = getFirestore(app);
import { loader } from "./ext.js";
const createNewUserInDataBase = async (firstName, lastName, email, password) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: password
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

// Registration 
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
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
        console.log(user);
        createNewUserInDataBase(regFirsName, regLastName, regEmail, regPassword);
        console.log("New User in DataBase");
        loader("Registered Successfully");
        docLoader.style.display = "flex";
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode === "auth/email-already-in-use") {
            return alert("Email is already in Use");
        }
    }finally{
        setTimeout(()=>{
            docLoader.style.display = "none";
        },2000);
    }
    })
console.log(db);