import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzbQAXevZiZYGWFrrgcyJJTj-z3v0drpI",
    authDomain: "todo-app-cp-1100d.firebaseapp.com",
    projectId: "todo-app-cp-1100d",
    storageBucket: "todo-app-cp-1100d.appspot.com",
    messagingSenderId: "954035814493",
    appId: "1:954035814493:web:36ac7f784469943f9fcdb4",
    measurementId: "G-H397XVGND7"
});

const db = firebaseApp.firestore();

export default db