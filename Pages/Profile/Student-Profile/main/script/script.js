import { auth, signOut, doc, getDoc, db, updateDoc } from "../../../../../assests/script/libs/firebase.js";

import { loader, pageLoader } from "../../../../../assests/script/ext.js";

import { storage, ref, uploadBytes, getDownloadURL } from "../../../../../assests/script/libs/firebase.js";

const signOutBtn = document.getElementById("sign-out");
const userProfileNameNav = document.getElementById("user-profile-name");
let currentUser = localStorage.getItem("currentUser");
const userProfileImg = document.querySelectorAll(".user-profile-img");

const uploadImageToStorage = async (file) => {
    const storageRef = ref(storage, `user-profile-collection/${file.name}`);
    try {
        const snapshot = await uploadBytes(storageRef, file);
        console.log("File successfully uploaded");
        console.log(snapshot.metadata);

        const url = await getDownloadURL(storageRef);
        console.log(url);

        const userRef = doc(db, "users", `${currentUser}`);
        if (userRef) {
            console.log(userRef);
            const docUpdate = await updateDoc(userRef, {
                imageUrl: url,
            });
        } else {
            console.log("User not found");
        }


    } catch (error) {
        console.log(error)
    }

}

document.getElementById("save-profile-img").addEventListener("click", (evt) => {
    const btn = evt.target;
    btn.setAttribute("disabled", true);
    const profileImgSaver = document.getElementById("profile-img-saver");
    const imageInput = document.getElementById("profile-img-file");
    const file = imageInput.files[0];
    console.log(file);

    uploadImageToStorage(file);
    setTimeout(() => {
        profileImgSaver.style.display = "none";
        btn.removeAttribute("disabled");
    }, 1000);
})
const getUserData = async () => {
    if (currentUser === null) {
        loader("Please Sign In First");
        setTimeout(_ => {
            location.replace("../../Auth-Log/sign_in.html")
        }, 1000);
        return;
    }
    try {
        const userProfileNameNav = document.getElementById("profile-name")
        const userProfileEmailNav = document.getElementById("profile-email");
        const userProfileNameDom = document.getElementById("profile-info-sec-name");
        const traineeEmailDom = document.getElementById("trainee-email-dom")

        const docRef = doc(db, "users", currentUser);
        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {
            const currentUserDoc = docSnap.data()
            console.log("Document data:", currentUserDoc);

            userProfileNameNav.innerText = (currentUserDoc.firstName).toUpperCase();

            userProfileNameNav.innerText = `${currentUserDoc.firstName.toUpperCase()} ${currentUserDoc.lastName.toUpperCase()}`;

            userProfileEmailNav.innerText = currentUserDoc.email;
            
            userProfileNameDom.innerText = `${currentUserDoc.firstName} ${currentUserDoc.lastName}`;

            traineeEmailDom.innerText = currentUserDoc.email;
            
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