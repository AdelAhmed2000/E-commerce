import React from "react";
import "../../style/component/Exclusive/exclusive.css";
import exclusive from "../../image/exp/5.jpg";
export const Exclusive = () => {
  return (
    <>
      <div className="exclusive">
        <div className="container">
          <div className="exclusive_title">
            <h1>
              Exclusive <span>Brands</span>
            </h1>
          </div>
          <div className="image">
            <img src={exclusive} alt="Exclusive" />
          </div>
        </div>
      </div>
    </>
  );
};
