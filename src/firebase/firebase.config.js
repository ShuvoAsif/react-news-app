// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7f0fPs-r1KIs-vM90HbgU0q2--wNeoKE",
    authDomain: "international-daily-news.firebaseapp.com",
    projectId: "international-daily-news",
    storageBucket: "international-daily-news.appspot.com",
    messagingSenderId: "114847637331",
    appId: "1:114847637331:web:3a84bdd8f19186665f0ba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;