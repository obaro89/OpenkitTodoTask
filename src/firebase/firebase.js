// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.KEY,
  authDomain: "todoapp-ce352.firebaseapp.com",
  databaseURL: "https://todoapp-ce352-default-rtdb.firebaseio.com",
  projectId: "todoapp-ce352",
  storageBucket: "todoapp-ce352.appspot.com",
  messagingSenderId: "246202628231",
  appId: "1:246202628231:web:60843dd4880054dceca022",
  measurementId: "G-7N7WCKY1FD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
