import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDIxGua6zvOrAndcRRuCDU6zm25_CJImD8",
  authDomain: "athena-300fb.firebaseapp.com",
  projectId: "athena-300fb",
  storageBucket: "athena-300fb.appspot.com",
  messagingSenderId: "277448233001",
  appId: "1:277448233001:web:67eb5a644f4ca7a167cc38",
};

const app = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const fieldValue = firebase.firestore.FieldValue;

export { app, fieldValue, provider };
