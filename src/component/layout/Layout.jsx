import React, { Fragment } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Headroom from "react-headroom";
import { Cart } from "../cart/Cart";

export const Layout = () => {
  return (
    <Fragment>
      <Headroom>
        <Navbar />
      </Headroom>
      <Cart />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
