// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfOHY_-qQOMHWW3DXEcqZgGvsFnXqzQKQ",
  authDomain: "insta-clone-ec254.firebaseapp.com",
  projectId: "insta-clone-ec254",
  storageBucket: "insta-clone-ec254.appspot.com",
  messagingSenderId: "411565190814",
  appId: "1:411565190814:web:9c8b4881647bd40ee6158f",
  measurementId: "G-1RYF4JHPTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const firestore= getFirestore(app);
const storage= getStorage(app);

export {app, auth, firestore, storage};
//const analytics = getAnalytics(app);