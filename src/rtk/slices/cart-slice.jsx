import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  favItem: localStorage.getItem("favItem")
    ? JSON.parse(localStorage.getItem("favItem"))
    : [],
};
export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.cartItems.push(productClone);
        toast.success("Added To Cart");
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      //!
    },
    deleteFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          toast.success("Removed From Cart");
          state.cartItems = nextCartItems;
        }
        localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
        return state;
      });
    },
    //
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        // toast.info("Decreased product quantity");
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        // toast.error("Product removed from cart");
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    //
    clear: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      toast.success("Cart cleared");
    },
    addToFav: (state, action) => {
      const findProduct = state.favItem.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.favItem.push(productClone);
        toast.success("Added To Favorite");
      }
      localStorage.setItem("favItem", JSON.stringify(state.favItem));
    },
    deleteFromFav: (state, action) => {
      state.favItem.map((favItem) => {
        if (favItem.id === action.payload.id) {
          const nextfavItem = state.favItem.filter(
            (item) => item.id !== favItem.id
          );
          toast.success("Removed From Favorites");
          state.favItem = nextfavItem;
        }
        localStorage.setItem("favItem", JSON.stringify(state.favItem));
        return state;
      });
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  clear,
  decreaseCart,
  addToFav,
  deleteFromFav,
} = cartSlice.actions;

export default cartSlice.reducer;
