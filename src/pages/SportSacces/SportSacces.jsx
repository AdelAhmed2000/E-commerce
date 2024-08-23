import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/product-slice";
import { Card } from "../../component/common/card/Card";
import { CuratedExperience } from "../../component/CuratedExperience/CuratedExperience";

export const SportSacces = () => {
  const [loading, setloading] = useState(true);
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("products/category/sports-accessories"));
    setloading(false);
  }, []);

  if (loading) {
    return <span className="loader"></span>;
  }
  return (
    <>
      <div className="SportSacces mb-5 margin_top">
        <div className="container">
          <h1 className="pt-4 font-size-5">Sports-Accessories .</h1>
          <div className="row">
            {allProducts.products.map((data) => (
              <Card dispatch={dispatch} data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
      <CuratedExperience />
    </>
  );
};
