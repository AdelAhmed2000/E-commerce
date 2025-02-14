import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AYTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
const firebaseConfig = {
  apiKey: "AIzaSyA2nmfWntageH1QqFwnBI1nRJv1ExIk0GE",
  authDomain: "e-commerc-dashboard.firebaseapp.com",
  projectId: "e-commerc-dashboard",
  storageBucket: "e-commerc-dashboard.appspot.com",
  messagingSenderId: "34704559310",
  appId: "1:34704559310:web:569007fd333b4b7ef3949f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export default auth;
