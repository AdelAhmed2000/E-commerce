import React, { useContext } from "react";
import "../../style/component/cart/cart.css";
import { VscClose } from "react-icons/vsc";
import {
  addToCart,
  decreaseCart,
  deleteFromCart,
} from "../../rtk/slices/cart-slice";

export const SingleCart = ({ data, dispatch }) => {
  return (
    <>
      <div className="cartSingle">
        <div className="cartImage">
          <img src={data.images[0]} alt={"image"} />
        </div>
        <div className="cartDescription">
          <div className="cartDetalisHeader">
            <h6>{data.title}</h6>
            <VscClose onClick={() => dispatch(deleteFromCart(data))} />
          </div>
          <div className="cartPrice">
            <div className="cartPriceItem">
              <p>{data.price}</p>
              <p>Vat inclusive</p>
            </div>
            <button>
              <span onClick={() => dispatch(decreaseCart(data))}>-</span>
              <div className="count">{data.quantity}</div>
              <span onClick={() => dispatch(addToCart(data))}>+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
