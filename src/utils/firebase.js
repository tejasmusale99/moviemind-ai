// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY-a5Bfir0Cz9C-PjL9stE_1wEFAWiYFg",
  authDomain: "moviemindai-ad59a.firebaseapp.com",
  projectId: "moviemindai-ad59a",
  storageBucket: "moviemindai-ad59a.firebasestorage.app",
  messagingSenderId: "959232734409",
  appId: "1:959232734409:web:f581acfb3f0f98b6ab4918",
  measurementId: "G-XDFFDPL1T7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
