import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [products, setProduct] = useState([]);
  function getProducts() {
    fetch("http://localhost:3000/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        alert("Unable to get the data");
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <>
      <div className="container">
        <h2 className="text-center mb-4">Products</h2>
        <div className="row mb-3">
          <div className="col">
            <Link to={"/admin/products/creatrProduct"} className="btn btn-primary me-1">
              Create Product
            </Link>
            <button className="btn btn-outline-primary" onClick={getProducts}>
              Refresh
            </button>
          </div>
          <div className="col"></div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}$</td>
                  <td>{product.category}</td>
                  <td>
                    <img
                      src={"/public/image/" + product.image}
                      alt="image"
                      width={"100"}
                    />
                  </td>
                  <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                    <Link
                      to={"/admin/products/edit" + product.id}
                      className="btn btn-primary btn-sm me-1"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      href="/admin/products/delete"
                      className="btn btn-danger btn-sm "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
