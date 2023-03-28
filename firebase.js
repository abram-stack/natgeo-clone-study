// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP-oALjszz4ZXjsKzJVdXToMJXuuz4Nas",
  authDomain: "medium-clone-e10c0.firebaseapp.com",
  projectId: "medium-clone-e10c0",
  storageBucket: "medium-clone-e10c0.appspot.com",
  messagingSenderId: "406820025134",
  appId: "1:406820025134:web:c329cb5105c72d219c00bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//services
const db = getFirestore()

export {db}