import React, { useEffect, useState } from "react";
import { axiosConfig } from "../../axiosConfig/AxiosConfig";
import { Card } from "../../component/common/card/Card";
import { NewFashion } from "../../component/newFashon/NewFashion";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/product-slice";

export const Shoes = () => {
  const [loading, setloading] = useState(true);

  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("products/category/womens-shoes"));
    setloading(false);
  }, []);
  if (loading) {
    return <span className="loader"></span>;
  }

  return (
    <>
      <div className="SportSacces mb-5 margin_top">
        <div className="container">
          <h1 className="pt-4 font-size-5">SHOES .</h1>
          <div className="row">
            {allProducts.products.map((data) => (
              <Card dispatch={dispatch} data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
      <NewFashion />
    </>
  );
};
