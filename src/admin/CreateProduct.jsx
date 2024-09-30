import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  function handelImage(e) {
    setImage(e.target.files[0]);
  }
  console.log(image);

  async function handelSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData.entries());
    formData.append("image", image);
    console.log(product);

    if (
      !product.title ||
      !product.brand ||
      !product.category ||
      !product.price ||
      !product.description
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    const res = await axios
      .post("http://localhost:3000/products", product)
      .then((respoe) => {
        if (respoe.status === 201) {
          //Product created successfully
          navigate("/admin/products");
        } else if (respoe.status === 400) {
          toast.error("Validation errors");
        } else {
          toast.error("Unable to create product");
        }
        console.log(respoe);
      });
  }
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h2 className="text-center mb-5">Create Product</h2>
          <form onSubmit={handelSubmit}>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="title">
                Name
              </label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  id="title"
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="brand">
                Brand
              </label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  name="brand"
                  id="brand"
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="category">
                Category
              </label>
              <div className="col-sm-8">
                <select name="category" className="form-select" id="category">
                  <option value="Other">Other</option>
                  <option value="PhoneAccess">PhoneAccess</option>
                  <option value="Computer">Computer</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Winter">Winter</option>
                  <option value="Bags">Bags</option>
                </select>
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="price">
                Price
              </label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  step={"0.01"}
                  min={"1"}
                  id="price"
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="description">
                Description
              </label>
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  rows={4}
                ></textarea>
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="image">
                Image
              </label>
              <div className="col-sm-8">
                <input
                  onChange={handelImage}
                  className="form-control"
                  type="file"
                  name="file"
                  id="image"
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="row mb-3">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col-sm-4 d-grid">
                <Link
                  className="btn btn-secondary"
                  to={"/admin/products"}
                  role="button"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
