// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAOVascY8vqKoO-wWVFkGpPKiQrkDc8CXY",
  authDomain: "daily-spiritual-quotes.firebaseapp.com",
  projectId: "daily-spiritual-quotes",
  storageBucket: "daily-spiritual-quotes.appspot.com",
  messagingSenderId: "392563247249",
  appId: "1:392563247249:web:e60b88f0563e04c3181730",
  measurementId: "G-HBNF8NS8HG"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};
