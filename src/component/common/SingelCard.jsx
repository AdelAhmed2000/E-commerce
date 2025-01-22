import React, { useContext, useEffect, useState } from "react";
import "../../style/component/card/singelCard.css";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterestP,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { LiaSmsSolid } from "react-icons/lia";
import { FcLink } from "react-icons/fc";
import { addToCart } from "../../rtk/slices/cart-slice";
import { useParams } from "react-router-dom";
import { db } from "../../api/data/firebase";
import { doc, getDoc } from "firebase/firestore";

export const SingelCard = ({ data, cat, dispatch }) => {
  const productId = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", productId.id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productId.id, ...productSnap.data() });
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className="singelItem">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="itemImage">
                <img src={product.img} width={300} alt={product.id} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bg">
              <div className="itemDetails">
                <h5>{product.id + " > " + product.category} </h5>
                <h1>{product.title}</h1>
                <h3>{product.price} $</h3>
                <p>{product.description}</p>
                <p>Rating : {product.rating}</p>
                <h4>
                  {product.brand === undefined
                    ? "New Product"
                    : "Brand Name : " + product.brand}
                </h4>
                <div className="addToCart">
                  <button
                    className="btnAddToCart"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="itemInfo">
                <div className="itemInfo-ul">
                  <p>
                    SKU: 1400149 <br />
                    Categories: , {product.category}
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
