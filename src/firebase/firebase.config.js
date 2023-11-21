// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1k-_laRKJyJY2ij1CMzlaFLpCXHe1XJ4",
  authDomain: "the-dragon-news-d7c5f.firebaseapp.com",
  projectId: "the-dragon-news-d7c5f",
  storageBucket: "the-dragon-news-d7c5f.appspot.com",
  messagingSenderId: "98947236365",
  appId: "1:98947236365:web:343f29700f4f010a730b44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
