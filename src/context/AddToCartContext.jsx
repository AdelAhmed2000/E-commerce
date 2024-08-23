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
  const [checkCart, setCheckCart] = useState([]);
  const [checkFavorite, setCheckFavorite] = useState([]);
  const [activeCart, setActiveCart] = useState(false);
  const [remove, setRemove] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Add to cart
  async function addToCartFetchData(data) {
    setRemove(true);
    try {
      const res = await axios.post("http://localhost:3000/cart", data);
      toast.success("Added To Cart");
      setRemove(false);
    } catch (err) {
      toast.error("Already Added To Cart");
      setRemove(false);
    }
  }
  // Update the cart
  async function checkCartItems() {
    const { data } = await axios.get("http://localhost:3000/cart");
    setCheckCart(data);
  }
  // Remove the cart
  async function removeFromCart(id) {
    setRemove(true);
    try {
      const res = await axios.delete(`http://localhost:3000/cart/${id}`);
      toast.success("Removed From Cart");
      setRemove(false);
    } catch (err) {
      toast.error("Some Thing Failed");
      setRemove(false);
    }
  }
  // Add To Favorite
  async function addToFavoriteFetchData(data) {
    setRemove(true);
    try {
      const res = await axios.post("http://localhost:3000/favorite", data);
      toast.success("Added To Favorite");
      setRemove(false);
    } catch (err) {
      console.log(err);
      toast.error("Already Added To Favorite");
      setRemove(false);
    }
  }
  // Update the Favorites
  async function checkFavoriteItems() {
    const { data } = await axios.get("http://localhost:3000/favorite");
    setCheckFavorite(data);
  }
  // Remove the Favorites
  async function removeFromFavorites(id) {
    setRemove(true);
    try {
      const res = await axios.delete(`http://localhost:3000/favorite/${id}`);
      toast.success("Removed From favorite");
      setRemove(false);
    } catch (err) {
      toast.error("Some Thing Failed");
      setRemove(false);
    }
  }
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
    checkCartItems();
    checkFavoriteItems();
  }, [remove]);
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
        addToCartFetchData,
        checkCart,
        activeCart,
        setActiveCart,
        removeFromCart,
        addToFavoriteFetchData,
        checkFavoriteItems,
        checkFavorite,
        removeFromFavorites,
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
