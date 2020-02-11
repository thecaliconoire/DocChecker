import firebase from "firebase/app";
import "firebase/storage"
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDvFaRJrWvKq8pwKneYqD-KlfbwqFWuEw",
    authDomain: "the-claimback-kid-upload-docs.firebaseapp.com",
    databaseURL: "https://the-claimback-kid-upload-docs.firebaseio.com",
    projectId: "the-claimback-kid-upload-docs",
    storageBucket: "the-claimback-kid-upload-docs.appspot.com",
    messagingSenderId: "876194981516",
    appId: "1:876194981516:web:82cf8cc4d57268a7b17da9",
    measurementId: "G-0J2HJD0FJS"
  };
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()
  const storage = firebase.storage().ref;

export default firebaseConfig;
