// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9uD3--Ss6BhDi0vIKcaaY3DPKvG1phwg",
  authDomain: "react-khoa.firebaseapp.com",
  projectId: "react-khoa",
  storageBucket: "react-khoa.appspot.com",
  messagingSenderId: "369303534829",
  appId: "1:369303534829:web:a1f66eaf17bd730e9de0e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
console.log(auth, 'auth')