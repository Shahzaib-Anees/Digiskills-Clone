import { auth, signOut, doc, getDoc, db } from "../../../../../assests/script/libs/firebase.js";

import { loader, pageLoader } from "../../../../../assests/script/ext.js";

const signOutBtn = document.getElementById("sign-out");
const userProfileNameNav = document.getElementById("user-profile-name");
let currentUser = localStorage.getItem("currentUser");
const userProfileImg = document.querySelectorAll(".user-profile-img");




const getUserData = async () => {
    if (currentUser === null) {
        loader("Please Sign In First");
        setTimeout(_ => {
            location.replace("../../Auth-Log/sign_in.html")
        }, 1000);
        return;
    }
    try {
        const userProfileNameDom = document.getElementById("profile-name")
        const userProfileEmailDom = document.getElementById("profile-email");

        const docRef = doc(db, "users", currentUser);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const currentUserDoc = docSnap.data()
            console.log("Document data:", currentUserDoc);
            userProfileNameNav.innerText = (currentUserDoc.firstName).toUpperCase();
            userProfileNameDom.innerText = `${currentUserDoc.firstName.toUpperCase()} ${currentUserDoc.lastName.toUpperCase()}`;
            userProfileEmailDom.innerText = currentUserDoc.email;
            userProfileImg.forEach(img => {
                img.src = `${currentUserDoc.imageUrl}`
            })
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.log(error)
    } finally {

    }
}


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