import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs01UoxEKAT5JtQmU6LefVKCxuTsr1K_k",
  authDomain: "reactcontext-8d657.firebaseapp.com",
  projectId: "reactcontext-8d657",
  storageBucket: "reactcontext-8d657.firebasestorage.app",
  messagingSenderId: "1054250439702",
  appId: "1:1054250439702:web:29c28598a94233c6aad137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)