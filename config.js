import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDl0GHQWscr1PfOwpjwBL2Uap-iBQWqJ1U",
  authDomain: "pro-71-fcab9.firebaseapp.com",
  projectId: "pro-71-fcab9",
  storageBucket: "pro-71-fcab9.appspot.com",
  messagingSenderId: "513385878602",
  appId: "1:513385878602:web:a775bea4f277bc9da802b3"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
