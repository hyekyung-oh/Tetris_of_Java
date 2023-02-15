// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore,
     collection,
      addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJF4FPH6EXs1jNWzFuTaevX5SIGrn4ZXA",
    authDomain: "turn-project-7725f.firebaseapp.com",
    projectId: "turn-project-7725f",
    storageBucket: "turn-project-7725f.appspot.com",
    messagingSenderId: "762417957244",
    appId: "1:762417957244:web:60872ad611736c04ba7cf9",
    measurementId: "G-GW1R53GSBG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveinfo = (score, time) =>
  addDoc(collection(db,"rank1"),{score,time});