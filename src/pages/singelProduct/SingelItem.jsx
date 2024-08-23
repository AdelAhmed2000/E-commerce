import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingelCard } from "../../component/common/SingelCard";
import { useDispatch, useSelector } from "react-redux";

export const SingelItem = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  const [product, setProduct] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function displayItemDetalis(id) {
      try {
        const res = await axios(`https://dummyjson.com/products/${id.id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setloading(false);
      }
    }
    displayItemDetalis(id);
  }, [id]);
  if (loading) {
    return <span className="loader"></span>;
  }
  return <SingelCard dispatch={dispatch} data={product} cat={id} />;
};
