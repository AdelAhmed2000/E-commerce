import React, { useEffect, useState } from "react";
import "../../style/pages/home.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CategorysSection } from "../../component/categorysComponent/CategorysSection";
import { NewFashion } from "../../component/newFashon/NewFashion";
import { Newest } from "../../component/Newest/Newest";
import { CuratedExperience } from "../../component/CuratedExperience/CuratedExperience";
import { Exclusive } from "../../component/Exclusive/Exclusive";
import { Trending } from "../../component/Trending/Trending";

export const Home = () => {
  return (
    <>
      <section className="homePage">
        <div className="container">
          <div className="pageTitle">
            <h1>Homepage</h1>
          </div>
          <div className="parent">
            <div className="overlay"></div>
            <div className="search">
              <div className="search_header">
                <p>NEW TREND</p>
                <h2>COLLUSION</h2>
                <b>An exclusive selection of this season's trends.</b>
              </div>
              <div className="shop_now mt-4">
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className="categories">
              <div className="left">
                <div className="overlay"></div>
                <button type="button" className="btn text-white bg-black">
                  MEN
                </button>
                <h5>A new dimension of Fashion.</h5>
                <p className="line">SHOP JEANS</p>
              </div>
              <div className="center">
                <div className="content">
                  <div className="overlay"></div>
                  <button type="button" className="btn text-white bg-black">
                    SUMMER 2023
                  </button>
                  <h5>Reliable outwear for unreliable weather.</h5>
                  <p className="line">SHOP NOW</p>
                </div>
                <div className="social">
                  <div className="ins">
                    <FaInstagram />
                  </div>
                  <div className="fac">
                    <FaFacebook />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="top">
                  <span></span>
                  <p>#welcomesummer</p>
                  <h6>PROMOTIONS UP TO 60% OFF</h6>
                </div>
                <div className="bottom">
                  <h6>SUBSCRIBE</h6>
                  <p>
                    & be the first to know about new arrivals, special offers,
                    in-store events and news.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategorysSection />
      <Trending />
      <NewFashion />
      <Newest />
      <CuratedExperience />
      <Exclusive />
    </>
  );
};
