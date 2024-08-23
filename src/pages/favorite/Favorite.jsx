import React from "react";
import { VscClose } from "react-icons/vsc";
import "../../style/pages/favorite.css";
import { Exclusive } from "../../component/Exclusive/Exclusive";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromFav } from "../../rtk/slices/cart-slice";

export const Favorite = () => {
  const favItem = useSelector((state) => state.cart.favItem);

  const dispatch = useDispatch();
  return (
    <>
      {favItem.length > 0 ? (
        <div className="favParent">
          <div className="container">
            <div className="title">
              <h1 className="mb-5">Wishlist</h1>
            </div>
            <div className="row mb-5">
              {favItem.map((data) => (
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3" key={data.id}>
                  <div className="favoriteSingle">
                    <div className="favoriteImage">
                      <img src={data.images[0]} alt={"image"} />
                      <VscClose
                        className="close"
                        onClick={() => dispatch(deleteFromFav(data))}
                      />
                    </div>
                    <div className="favoriteDescription">
                      <div className="favoriteDetalisHeader">
                        <h6>{data.title}</h6>
                      </div>
                      <div className="favoritePrice">
                        <div className="favoritePriceItem">
                          <p>${data.price}</p>
                          <p>Vat inclusive</p>
                        </div>
                        <div className="addToCart">
                          <button
                            className="btnAddToCart"
                            onClick={() => dispatch(addToCart(data))}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Exclusive />
        </div>
      ) : (
        <h4 className="text-center mt-5">Adding To Favorite</h4>
      )}
    </>
  );
};
