// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgqzxm21MqIJBlM7ltSIElpeJ7OGb0hMs",
  authDomain: "elearning-d88d4.firebaseapp.com",
  projectId: "elearning-d88d4",
  storageBucket: "elearning-d88d4.appspot.com",
  messagingSenderId: "615050084243",
  appId: "1:615050084243:web:42bb6b7b1aa81fafeab266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;