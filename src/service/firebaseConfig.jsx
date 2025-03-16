// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3pKErAWQKhSF7ozdB7HHww1lCa9jXtFM",
  authDomain: "ai-travel-planner-3855e.firebaseapp.com",
  projectId: "ai-travel-planner-3855e",
  storageBucket: "ai-travel-planner-3855e.firebasestorage.app",
  messagingSenderId: "971192671091",
  appId: "1:971192671091:web:eb3642123a6322726a4306",
  measurementId: "G-D3XGJWNR6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);