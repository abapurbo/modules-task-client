// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwnCOkPfabCEUGgXPPEtN6cdiBJlYMP84",
  authDomain: "modules-task-firebase.firebaseapp.com",
  projectId: "modules-task-firebase",
  storageBucket: "modules-task-firebase.firebasestorage.app",
  messagingSenderId: "242455218013",
  appId: "1:242455218013:web:085af1a48d235fa234cab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;