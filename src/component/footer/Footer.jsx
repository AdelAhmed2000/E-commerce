import React from "react";
import "../../style/component/MainFooter/MainFooter.css";
import { SecondFooter } from "./SecondFooter";
import { CobyRight } from "./CobyRight";
import { FirstFooter } from "./FirstFooter";

export const Footer = () => {
  return (
    <>
      <div className="Main_footer">
        <div className="container">
          <FirstFooter />
          <SecondFooter />
          <CobyRight />
        </div>
      </div>
    </>
  );
};
