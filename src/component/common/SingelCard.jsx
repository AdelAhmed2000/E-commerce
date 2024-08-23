import React, { useContext } from "react";
import "../../style/component/card/singelCard.css";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterestP,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { LiaSmsSolid } from "react-icons/lia";
import { FcLink } from "react-icons/fc";
import { addToCart, decreaseCart } from "../../rtk/slices/cart-slice";

export const SingelCard = ({ data, cat, dispatch }) => {
  return (
    <>
      <div className="singelItem">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="itemImage">
                <img src={data.images[0]} width={300} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bg">
              <div className="itemDetails">
                <h5>{cat.id + " > " + cat.category} </h5>
                <h1>{data.title}</h1>
                <h3>{data.price} $</h3>
                <p>{data.description}</p>
                <p>Rating : {data.rating}</p>
                <h4>
                  {data.brand === undefined ? "" : "Brand Name : " + data.brand}
                </h4>
                <div className="addToCart">
                  <button
                    className="btnAddToCart"
                    onClick={() => dispatch(addToCart(data))}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="itemInfo">
                <div className="itemInfo-ul">
                  <p>
                    SKU: 1400149 <br />
                    Categories: , {cat.category}
                    <br />
                    Tags: coup, men, shoes, trendy
                  </p>
                </div>
                <div className="itemInfo-share">
                  <span>SHARE :</span>
                  <FaSquareXTwitter />
                  <FaFacebook />
                  <FaLinkedin />
                  <FaPinterestP />
                  <LiaSmsSolid />
                  <FcLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
