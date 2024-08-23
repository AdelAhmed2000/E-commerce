import React from "react";
import text from "../../image/newFashion/signature.svg";
import "../../style/component/about/about.css";

export const About = () => {
  return (
    <div className="about margin_top">
      <div className="container">
        <div className="about_title">
          <h1>Our Story</h1>
          <p>
            COUP is a fashion and lifestyle brand. We epitomize a carefree,
            youthful spirit which embraces freedom, independence and adventure.
            Creating clothing and accessories for people who appreciate
            effortless design, high-quality finishes and attention to detail;
            Coup is best known for its inspired pieces. Ever-evolving to support
            all aspects of youth lifestyle, we create sporting classics,
            lazy-day staples and trendy looks.
          </p>
          <p>
            Coup is known for its high quality, affordable and wide selections
            of clothes, footwear, and accessories for men.
          </p>
        </div>
        <div className="about_title_two">
          <h4>EST. 2002</h4>
          <p>
            As set out in our terms and conditions, this Website operated by
            Coup Retail Limited, whose registered address is El-Nozha El-Gdida
            St. 74 Joseph Tito St, Cairo, Egypt. Coup Retail Limited is the data
            controller in respect of information collected when you browse this
            Website and purchase our products. If you have any queries regarding
            our use of personal information or this privacy policy, you can
            write to Data Protection, El-Nozha El-Gdida St. 74
          </p>
          <p>Joseph Tito St, Cairo, Egypt.</p>
        </div>
        <div className="about_title_three">
          <p>Globally integrate accurate collaboration and idea-sharing</p>
          <img src={text} alt="logoText" />
        </div>
      </div>
    </div>
  );
};
