import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3Py6HDk1QMXN05TfQpmHb9sH1O7ZRIxc",
    authDomain: "line-dadba.firebaseapp.com",
    projectId: "line-dadba",
    storageBucket: "line-dadba.appspot.com",
    messagingSenderId: "555904069575",
    appId: "1:555904069575:web:f0ce3fe173aa67e31d73e2"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };