import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChZmIGgLpBdJjn69MYkk97S3Ye9WEIDEM",
  authDomain: "planner-730ea.firebaseapp.com",
  projectId: "planner-730ea",
  storageBucket: "planner-730ea.appspot.com",
  messagingSenderId: "325408370843",
  appId: "1:325408370843:web:08eb2889bad8559402163e",
  measurementId: "G-9CBQLJ9R67",
};

const db = firebase.initializeApp(firebaseConfig).firestore();
export default db;
