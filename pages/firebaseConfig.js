firebaseConfig.js
import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
 import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA50FO3bt1bCSvDHZ3wvU6_0F9bn_PfBq4",
    authDomain: "seatswapuga.firebaseapp.com",
    databaseURL: "https://seatswapuga-default-rtdb.firebaseio.com",
    projectId: "seatswapuga",
    storageBucket: "seatswapuga.appspot.com",
    messagingSenderId: "433869449365",
    appId: "1:433869449365:web:7f6db6fb179eae6f09939c",
    measurementId: "G-VJ47NVMM4C"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
const auth = getAuth(app);