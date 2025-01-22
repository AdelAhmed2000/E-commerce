import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../api/data/firebase";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const category = "Doola"; // النوع الثابت للكاتجوري

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, "products"),
          where("category", "==", category)
        );
        const querySnapshot = await getDocs(q);
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products in Category: {category}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} -
            <img src={product.img} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
