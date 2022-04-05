// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3b3m_OS8wWiJFNKYZIJ8jMOCFHdpm39Q",
  authDomain: "kalikasan-blog.firebaseapp.com",
  projectId: "kalikasan-blog",
  storageBucket: "kalikasan-blog.appspot.com",
  messagingSenderId: "357788188411",
  appId: "1:357788188411:web:35a8cf40c301f92bcc7a5e",
  measurementId: "G-998RMV88PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);