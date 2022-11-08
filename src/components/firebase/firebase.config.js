// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxF7JSBp41ig5aMVKNE7TnBQKm34tuS8Y",
  authDomain: "pizza-30d4b.firebaseapp.com",
  projectId: "pizza-30d4b",
  storageBucket: "pizza-30d4b.appspot.com",
  messagingSenderId: "238011190517",
  appId: "1:238011190517:web:7935a451ca3c20b79809bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;