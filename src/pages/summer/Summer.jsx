import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/product-slice";
import { Card } from "../../component/common/card/Card";

export const Summer = () => {
  const [loading, setloading] = useState(true);

  // const allProducts = async () => {
  //   try {
  //     const res = await axiosConfig({
  //       url: "/products/category/tablets",
  //       method: "get",
  //       timeout: 10000,
  //     });
  //     console.log(res);
  //     if (res.status === 200) {
  //       setAllProduct(res.data.products);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setloading(false);
  //   }
  // };
  // useEffect(() => {
  //   allProducts();
  // }, []);
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("products/category/tablets"));
    setloading(false);
  }, []);

  if (loading) {
    return <span className="loader"></span>;
  }
  return (
    <>
      <div className="summer margin_top">
        <div className="container">
          <h1 className="pt-4 font-size-5">Summer offers .</h1>
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
