// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQowaE0k4CoLKf7Pl9VZJBFFen1YxZQ8M",
  authDomain: "form-auth-b8886.firebaseapp.com",
  projectId: "form-auth-b8886",
  storageBucket: "form-auth-b8886.appspot.com",
  messagingSenderId: "164996632460",
  appId: "1:164996632460:web:a52b931ce1cf52911d90a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
