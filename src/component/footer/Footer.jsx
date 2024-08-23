import React from "react";
import "../../style/component/MainFooter/MainFooter.css";
import { FirstFooter } from "./FirstFooter";
import { SecondFooter } from "./SecondFooter";
import { CobyRight } from "./CobyRight";

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
