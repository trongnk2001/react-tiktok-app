// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjdlhS424ZTLs22KF1z1qvZC36JiX6pwY",
  authDomain: "tiktokclone-e5c5e.firebaseapp.com",
  projectId: "tiktokclone-e5c5e",
  storageBucket: "tiktokclone-e5c5e.appspot.com",
  messagingSenderId: "244424218852",
  appId: "1:244424218852:web:0b59652fc10996e1eb34f1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;