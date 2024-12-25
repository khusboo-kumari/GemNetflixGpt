// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyZW13l2gri1Ny5-wWMbX3WGGFcDde0Hs",
  authDomain: "gemnetflixgpt.firebaseapp.com",
  projectId: "gemnetflixgpt",
  storageBucket: "gemnetflixgpt.firebasestorage.app",
  messagingSenderId: "249265759114",
  appId: "1:249265759114:web:09f39cb0253d953aa29e73",
  measurementId: "G-1CBE94FJQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);