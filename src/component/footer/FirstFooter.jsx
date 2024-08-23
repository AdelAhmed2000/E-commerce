import React from "react";
import "../../style/component/MainFooter/MainFooter.css";

export const FirstFooter = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <ul>
            <li className="bold">FREE DELIVERY</li>
            <li>
              If you purchase over 100$, shipping is on us. Receive your order
              within
            </li>
            <li>Yes, we ship to Egypt!</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="bold">14 DAYS RETURNS</li>
            <li>You have 14 days to change your mind and return the item.</li>
            <li>No questions asked!</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="bold">GIFT CARD</li>
            <li>
              Don’t know their size or favorite color? No need to worry – give
              them a Gift card and let them decide.
            </li>
            <li className="bold_sec">GET A GIFT CARD</li>
          </ul>
        </div>
      </div>
    </>
  );
};
