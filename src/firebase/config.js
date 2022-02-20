import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBiXylSJsWAgVqrv7MJxtJkNoTPm589Bwc",
    authDomain: "recipe-keeper-aa9dd.firebaseapp.com",
    projectId: "recipe-keeper-aa9dd",
    storageBucket: "recipe-keeper-aa9dd.appspot.com",
    messagingSenderId: "570449685197",
    appId: "1:570449685197:web:5084c96b40be3689275784",
    measurementId: "G-39PZ4H3T9D"
  };

firebase.initializeApp(firebaseConfig);
const myFirestore = firebase.firestore();

export {myFirestore};