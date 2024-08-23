import React, { useContext } from "react";
import "../../style/component/cart/cart.css";
import { AddToCartContext } from "../../context/AddToCartContext";
import { SingleCart } from "./SingleCart";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../rtk/slices/cart-slice";
export const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const { activeCart, setActiveCart } = useContext(AddToCartContext);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <div className={` cartItem ${!activeCart ? "activeCart" : ""}`}>
        <div className="cart">
          <div className="cartHeader">
            <span>Cart Item {cart.length}</span>
            <span onClick={() => setActiveCart(false)}>Close</span>
          </div>
          {cart.length > 0 ? (
            <>
              <div className="cartContainer">
                {cart.map((data, id) => (
                  <SingleCart dispatch={dispatch} key={id} data={data} />
                ))}
              </div>
              <div className="CompletePayment">
                <a
                  href={"/cartItemsAll"}
                  className="btn btn-primary w-100 rounded-4 mt-2 mb-2"
                >
                  Complete the payment
                </a>
              </div>
              <div className="clear">
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(clear())}
                >
                  Clear All Product
                </button>
              </div>
              <div className="totalPrice mt-3">
                <b className="totalCart">
                  Total Price: {totalPrice.toFixed(2)}$
                </b>
              </div>
            </>
          ) : (
            <h4>Shopping Now</h4>
          )}
        </div>
      </div>
    </>
  );
};
