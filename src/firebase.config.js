// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQajVG1QAci4gno7jYijBw-Qyl7ES7GgE",
  authDomain: "house-marketplace-app-a0803.firebaseapp.com",
  projectId: "house-marketplace-app-a0803",
  storageBucket: "house-marketplace-app-a0803.appspot.com",
  messagingSenderId: "898409078797",
  appId: "1:898409078797:web:20644c7f568bf2b446b544",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
