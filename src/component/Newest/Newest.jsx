import React, { useEffect } from "react";
import "../../style/component/newest/newest.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchProducts2 } from "../../rtk/slices/product-slice";
import { Card } from "../common/card/Card";

export const Newest = () => {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts2());
  }, []);

  const slicesProductShoes = allProducts.products2.slice(0, 4);

  return (
    <>
      <div className="newest">
        <div className="container">
          <div className="newest_title">
            <p>Discover our</p>
            <h1>Newest Arrivals.</h1>
          </div>
          <div className="newest_product">
            <div className="row">
              {slicesProductShoes.map((data) => (
                <Card data={data} dispatch={dispatch} key={data.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
