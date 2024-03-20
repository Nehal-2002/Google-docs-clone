// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv8o8PdW_BQJIfB7nCTs5w8qVploaHBF8",
  authDomain: "docs-clone-26f84.firebaseapp.com",
  projectId: "docs-clone-26f84",
  storageBucket: "docs-clone-26f84.appspot.com",
  messagingSenderId: "497393623254",
  appId: "1:497393623254:web:bd5feab54d4547bb692977"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);