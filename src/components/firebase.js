import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBey03BSlO_fayqKbKUPLKkQLS4-vPmMrc",
    authDomain: "contactme-1b601.firebaseapp.com",
    projectId: "contactme-1b601",
    storageBucket: "contactme-1b601.appspot.com",
    messagingSenderId: "795908568098",
    measurementId: "G-VYGJVWBQXE",
    appId: "1:795908568098:web:a30014e3e85811e67f467b",
});

const db = firebaseApp.firestore();
  

export {db};