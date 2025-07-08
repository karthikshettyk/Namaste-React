// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQQh2R6ln-cErgnS6HhhsnOoUkLUc0M_k",
  authDomain: "netflix-gpt-b0a8c.firebaseapp.com",
  projectId: "netflix-gpt-b0a8c",
  storageBucket: "netflix-gpt-b0a8c.firebasestorage.app",
  messagingSenderId: "414567079651",
  appId: "1:414567079651:web:0340c3ab2f553b15332fd6",
  measurementId: "G-HL7X69DZEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);