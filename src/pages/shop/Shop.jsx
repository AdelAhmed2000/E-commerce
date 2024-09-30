import React, { useEffect, useState } from "react";
import { Card } from "../../component/common/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/product-slice";

export const Shop = () => {
  const [loading, setloading] = useState(true);

  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("products"));
    setloading(false);
  }, []);
  console.log(allProducts);

  if (loading) {
    return <span className="loader"></span>;
  }
  return (
    <>
      <div className="shop margin_top">
        <div className="container">
          <h1 className="pt-4 font-size-5">Shop</h1>
          <div className="row">
            {allProducts.products.map((data) => (
              <Card dispatch={dispatch} data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
