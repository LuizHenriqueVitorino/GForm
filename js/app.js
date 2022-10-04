// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgrM-_vVpdTK650soeG2_NQO8Wx6hdm2o",
  authDomain: "gform-id.firebaseapp.com",
  projectId: "gform-id",
  storageBucket: "gform-id.appspot.com",
  messagingSenderId: "516633537113",
  appId: "1:516633537113:web:a3f1bbfa0d905eed39df48",
  measurementId: "G-5E2ET6HL7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
console.log(auth);

// Abrindo popup para se autenticar
signInWithPopup(auth, provider)
  .then((console.log))
  .catch(error => console.log('error:', error));

