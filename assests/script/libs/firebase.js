const firebaseConfig = {
    apiKey: "AIzaSyAWAifcM69HK0Khj_jjuHC3pnkD_54nlZM",
    authDomain: "digiskills-96385.firebaseapp.com",
    projectId: "digiskills-96385",
    storageBucket: "digiskills-96385.appspot.com",
    messagingSenderId: "595663190317",
    appId: "1:595663190317:web:94792cff1ea5c85743fba4",
    measurementId: "G-EHT4J866KM"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

// Firebase Auth 
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


// FireBase DataBase 
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    setDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, getFirestore, collection, addDoc, getDoc, setDoc, doc, signOut }