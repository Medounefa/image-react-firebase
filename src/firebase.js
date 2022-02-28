// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHNUTeqGcWEiTqPI1LVQmQjUTCj81XB0",
  authDomain: "profileimg-21309.firebaseapp.com",
  projectId: "profileimg-21309",
  storageBucket: "profileimg-21309.appspot.com",
  messagingSenderId: "819677627098",
  appId: "1:819677627098:web:d1d30f248c1bbb105fdbe3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)