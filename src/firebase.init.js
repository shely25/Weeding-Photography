// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnmgBTFmfnmF8STIYlALnUb2AaBoxDCf8",
    authDomain: "wedding-photography-2c5a0.firebaseapp.com",
    projectId: "wedding-photography-2c5a0",
    storageBucket: "wedding-photography-2c5a0.appspot.com",
    messagingSenderId: "723724429552",
    appId: "1:723724429552:web:6f3565f5d52d71b674fa35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;