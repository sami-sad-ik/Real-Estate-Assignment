// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6VMznUnOZIUV1DbvFG-N46MAqq4Qs1xg",
  authDomain: "real-state-assignment-pro.firebaseapp.com",
  projectId: "real-state-assignment-pro",
  storageBucket: "real-state-assignment-pro.firebasestorage.app",
  messagingSenderId: "111483773816",
  appId: "1:111483773816:web:fc2e338532a2c9a1d21e8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
