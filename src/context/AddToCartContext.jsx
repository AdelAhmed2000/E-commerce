import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../api/data/firebase";

export const AddToCartContext = createContext();

function AddToCartProvider({ children }) {
  const [activeCart, setActiveCart] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //? Auth Provider
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //? Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //? Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <AddToCartContext.Provider
      value={{
        activeCart,
        setActiveCart,
        currentUser,
        signUp,
        login,
        resetPassword,
      }}
    >
      {children}
    </AddToCartContext.Provider>
  );
}

export default AddToCartProvider;

export const useAuth = () => {
  return useContext(AddToCartContext);
};
