import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AYTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyD5qugMurGETiDnLtkq3pYdd2MKb2mXsoI",
  authDomain: "authproject-e9cc5.firebaseapp.com",
  projectId: "authproject-e9cc5",
  storageBucket: "authproject-e9cc5.appspot.com",
  messagingSenderId: "740269271649",
  appId: "740269271649:web:57d8b4c470aa5796ca9820",
  measurementId: "G-61VQZVYB2C",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
