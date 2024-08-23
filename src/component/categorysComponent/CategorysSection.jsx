import React from "react";
import "../../style/component/categorysSection/categorysSection.css";
export const CategorysSection = () => {
  return (
    <>
      <div className="categorySec">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div className="t-shirts d-end-category">
                <div className="overlay"></div>
                <a href="#">T-SHIRTS</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div className="one-side d-end-category">
                <div className="overlay"></div>
                <a href="#">SHIRTS</a>
              </div>
              <div className="two-side">
                <div className="jeans d-end-category">
                  <div className="overlay"></div>
                  <a href="#">JEANS</a>
                </div>
                <div className="shose d-end-category">
                  <div className="overlay"></div>
                  <a href="#">SHOSE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
