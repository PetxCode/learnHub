import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBOklnnFIeqFHsFeUu-dyEtCR4sa_16-x0",
  authDomain: "codelab-learning-hub.firebaseapp.com",
  projectId: "codelab-learning-hub",
  storageBucket: "codelab-learning-hub.appspot.com",
  messagingSenderId: "225727299951",
  appId: "1:225727299951:web:7905bd7d0bc4f954e4a89a",
});
