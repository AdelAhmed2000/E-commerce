import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/product-slice";
import "../../style/component/trending/trending.css";
import { Card } from "../common/card/Card";
import { Link } from "react-router-dom";

export const Trending = () => {
  const allProductsSh = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("products/category/mens-shirts"));
  }, []);
  const slicesProductShirt = allProductsSh.products.slice(0, 4);

  return (
    <>
      <div className="trending">
        <div className="container">
          <div className="title">
            <div className="title_brand">
              <p>Find what is</p>
              <h1>Trending Now</h1>
            </div>
            <div className="title_button">
              <Link to={"/shop"}>SHOP LATEST</Link>
            </div>
          </div>
          <div className="row">
            {slicesProductShirt.map((data) => (
              <Card
                dispatch={dispatch}
                data={data}
                badge={"-60% OFF"}
                key={data.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
