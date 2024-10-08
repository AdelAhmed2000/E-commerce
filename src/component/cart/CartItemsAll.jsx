import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../style/component/cart/cart.css";
import {
  addToCart,
  clear,
  decreaseCart,
  deleteFromCart,
} from "../../rtk/slices/cart-slice";

export const CartItemsAll = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.cartItems.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div className="cart-container margin_top">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.images[0]} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <p>{cartItem.description}</p>
                      <button
                        onClick={() => dispatch(deleteFromCart(cartItem))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">
                    Price ${cartItem.price}
                  </div>
                  <div className="cart-product-quantity">
                    <button onClick={() => dispatch(decreaseCart(cartItem))}>
                      -
                    </button>
                    <div className="count">{cartItem.quantity}</div>
                    <button onClick={() => dispatch(addToCart(cartItem))}>
                      +
                    </button>
                  </div>
                  <div className="cart-product-total-price">
                    Total ${cartItem.price * cartItem.quantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => dispatch(clear())}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${totalPrice.toFixed(2)}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
