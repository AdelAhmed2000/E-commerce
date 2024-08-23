import React from "react";
import one from "../../image/newFashion/1.png";
import two from "../../image/newFashion/2.jpg";
import three from "../../image/newFashion/3.png";
import five from "../../image/newFashion/4.jpg";
import "../../style/component/newFashion/newFashion.css";

export const NewFashion = () => {
  return (
    <>
      <div className="newFashion">
        <div className="container">
          <div className="newFashion_title">
            <p>EXPERIENCE A WHOLE</p>
            <h1>New fashion design.</h1>
            <h1>New Era.</h1>
          </div>
          <div className="newFashion_parent">
            <div className="last">
              <img className="oneSize" src={one} alt="one" />
              <img className="oneSize" src={two} alt="two" />
            </div>
            <div className="second">
              <img src={three} alt="three" />
              <div className="second_info">
                <p>FEEL FREE</p>
                <h4>Just be youself</h4>
              </div>
            </div>
            <div className="third">
              <img src={five} alt="" />
              <div className="third_info">
                <p>MADE TO WEAR</p>
                <h4>Your everyday style</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
