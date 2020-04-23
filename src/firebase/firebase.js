import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-bXkYIPIKOTZfm8yB04UFvM4ntJJRHLg",
    authDomain: "fir-login-23028.firebaseapp.com",
    databaseURL: "https://fir-login-23028.firebaseio.com",
    projectId: "fir-login-23028",
    storageBucket: "fir-login-23028.appspot.com",
    messagingSenderId: "676482831417",
    appId: "1:676482831417:web:0e30b4d511eac28312e9e8",
    measurementId: "G-7Y044M8XSP"
  };


    export const myFirebase = firebase.initializeApp(firebaseConfig);
    const baseDb = myFirebase.firestore();
    export const db = baseDb;
