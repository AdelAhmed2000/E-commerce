import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/product-slice";
import { Card } from "../../component/common/card/Card";
import { Exclusive } from "../../component/Exclusive/Exclusive";

export const Sale = () => {
  const [loading, setloading] = useState(true);

  // const allProducts = async () => {
  //   try {
  //     const res = await axiosConfig({
  //       url: "/products/category/mens-watches",
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
    dispatch(fetchProducts("products/category/mens-watches"));
    setloading(false);
  }, []);
  if (loading) {
    return <span className="loader"></span>;
  }
  return (
    <>
      <div className="saleParent mb-5 margin_top">
        <div className="container">
          <h1 className="pt-4 font-size-5 sale">
            <span>SALE!</span> UP TO 50% OFF
          </h1>
          <div className="row">
            {allProducts.products.map((data) => (
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
      <Exclusive />
    </>
  );
};
