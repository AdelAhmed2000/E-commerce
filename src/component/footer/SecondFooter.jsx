import React from "react";
import logo from "../../image/navbar/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const SecondFooter = () => {
  return (
    <>
      <div className="footer_parent">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="image">
              <img src={logo} alt="Logo" />
            </div>
            <div className="info pt-3 pb-2">
              <p>Cairo - Egypt</p>
              <p>care@coupeg.com</p>
              <p>0101 5067 823</p>
            </div>
            <div className="social">
              <FaFacebook className="fac" />
              <FaInstagram className="ins" />
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="sup-title">
              <h2>14 Days Returns | Free Delivery</h2>
              <p>Receive your order within 1 to 2 working days.</p>
            </div>
            <div className="sup_uls">
              <ul>
                <li className="sup_bold">Shop</li>
                <li>Shop</li>
                <li>WINTER </li>
                <li>SUMMER</li>
                <li>KIDS</li>
                <li>CLASSIC</li>
                <li>SHOES</li>
                <li>HOT</li>
                <li>DEALS</li>
                <li>ABOUT US</li>
              </ul>
              <ul>
                <li className="sup_bold">Categories</li>
                <li>Shirts </li>
                <li>Polos</li>
                <li>T-Shirts</li>
                <li>Pants</li>
                <li>Shorts</li>
                <li> SwimWear</li>
                <li>Sweatpants</li>
                <li>Jeans</li>
                <li>Jackets</li>
                <li>Pullovers</li>
                <li>Sweatshirts & Hoodies</li>
              </ul>
              <ul>
                <li className="sup_bold">Quick Links</li>
                <li>Orders</li>
                <li>Account details </li>
                <li>Policis</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
