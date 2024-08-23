import React from "react";
import "../../style/component/MainFooter/MainFooter.css";
import { SecondFooter } from "./SecondFooter";
import { CobyRight } from "./CobyRight";
import { FooterTwo } from "./FooterTwo";

export const Footer = () => {
  return (
    <>
      <div className="Main_footer">
        <div className="container">
          <FooterTwo />
          <SecondFooter />
          <CobyRight />
        </div>
      </div>
    </>
  );
};
