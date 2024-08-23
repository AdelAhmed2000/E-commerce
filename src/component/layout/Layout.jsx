import React, { Fragment } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Headroom from "react-headroom";

export const Layout = () => {
  return (
    <Fragment>
      <Headroom>
        <Navbar />
      </Headroom>
      <Outlet />
      <Footer />
    </Fragment>
  );
};
