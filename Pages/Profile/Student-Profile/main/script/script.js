import {auth , signOut , doc, getDoc, db } from "../../../../../assests/script/libs/firebase.js";

import { loader } from "../../../../../assests/script/ext.js";

const signOutBtn = document.getElementById("sign-out");
const userProfileNameNav = document.getElementById("user-profile-name");
let currentUser = localStorage.getItem("currentUser");

const getUserData = async () => {
    const userProfileNameDom = document.getElementById("profile-name")
    const userProfileEmailDom = document.getElementById("profile-email");
    
    const docRef = doc(db, "users", currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const currentUserDoc = docSnap.data()
        console.log("Document data:", currentUserDoc);
        userProfileNameNav.innerText = currentUserDoc.firstName;
        userProfileNameDom.innerText = `${currentUserDoc.firstName} ${currentUserDoc.lastName}`;
        userProfileEmailDom.innerText = currentUserDoc.email;
    } else {
        console.log("No such document!");
    }
};


document.getElementById("body").addEventListener("load", getUserData());

signOutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
        localStorage.removeItem("currentUser");
        loader("Sign Out Successfully");
        setTimeout(() => {
            location.replace("../../Auth-Log/sign_in.html")
        }, 2000)
    }).catch((error) => {
        console.log(error);
    });
})