import React from "react";
import "../../style/component/categorysSection/categorysSection.css";
import { Link } from "react-router-dom";
export const CategorysSection = () => {
  return (
    <>
      <div className="categorySec">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div className="t-shirts d-end-category">
                <div className="overlay"></div>
                <Link to={"/trending"}>T-SHIRTS</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div className="one-side d-end-category">
                <div className="overlay"></div>
                <Link to={"/sale"}>SALE</Link>
              </div>
              <div className="two-side">
                <div className="jeans d-end-category">
                  <div className="overlay"></div>
                  <Link to={"/MobileAccessories"}>MOBILE ACCESS</Link>
                </div>
                <div className="shose d-end-category">
                  <div className="overlay"></div>
                  <Link to={"/winter"}>SHOSE</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
