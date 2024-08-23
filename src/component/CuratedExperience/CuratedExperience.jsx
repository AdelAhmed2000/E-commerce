import React from "react";
import "../../style/component/CuratedExperience/CuratedExperience.css";
import first from "../../image/exp/1.png";
import second from "../../image/exp/2.png";
import third from "../../image/exp/3.png";
import fourth from "../../image/exp/4.png";
export const CuratedExperience = () => {
  return (
    <>
      <div className="experience">
        <div className="container">
          <div className="experience_title">
            <p>Foundational pieces for a modern clothing.</p>
            <p>Discover new styles that will last beyond the decade.</p>
            <h1>A Curated Experience</h1>
            <h2>of clothing footwear and accessories</h2>
          </div>
          <div className="experience_cat row">
            <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
              <div className="cat_image">
                <img src={first} alt="first" />
                <div className="cat_image_info">
                  <div className="image_info_hover">
                    <div className="top">
                      <h2 className="image_info_hover_h2">
                        Sophistication
                        <br /> suit
                      </h2>
                    </div>
                  </div>
                  <h2 className="cat_image_info_h2">
                    suit <br /> Sophistication
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
              <div className="cat_image">
                <img src={second} alt="second" />
                <div className="cat_image_info">
                  <div className="image_info_hover">
                    <div className="top">
                      <h2 className="image_info_hover_h2">
                        Casual <br /> Essentials
                      </h2>
                    </div>
                  </div>
                  <h2 className="cat_image_info_h2">
                    Casual <br /> Essentials
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
              <div className="cat_image">
                <img src={third} alt="third" />
                <div className="cat_image_info">
                  <div className="image_info_hover">
                    <div className="top">
                      <h2 className="image_info_hover_h2">
                        Outdoor <br /> Ruggedness
                      </h2>
                    </div>
                  </div>
                  <h2 className="cat_image_info_h2">
                    Outdoor <br /> Ruggedness
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
              <div className="cat_image">
                <img src={fourth} alt="fourth" />
                <div className="cat_image_info">
                  <div className="image_info_hover">
                    <div className="top">
                      <h2 className="image_info_hover_h2">
                        Sneaker <br /> Culture
                      </h2>
                    </div>
                  </div>
                  <h2 className="cat_image_info_h2">
                    Sneaker <br /> Culture
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
