import React, { useContext } from "react";
import logo from "../../image/navbar/logo.png";
import nav1 from "../../image/navbar/nav1.png";
import nav2 from "../../image/navbar/nav.png";
import nav3 from "../../image/navbar/nav3.png";
import "../../style/component/navbar/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { AddToCartContext } from "../../context/AddToCartContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { setActiveCart } = useContext(AddToCartContext);
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} className="imgLogo" alt="logo" />
          </Link>
        </div>
        <div className="d-flex row-reverse">
          <button
            className="navbar-toggler ms-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="icons">
            <div className="cartIcon" onClick={() => setActiveCart(true)}>
              <BsCart />
              <span>{cart.length}</span>
            </div>
            <div className="favorite">
              <Link to={"/favorite"}>
                <MdOutlineFavoriteBorder />
              </Link>
            </div>
            <div className="login">
              <Link className="color" to={"/signUp"}>
                <VscHome />
              </Link>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link shop pending"
                    : isActive
                    ? "nav-link shop active"
                    : "nav-link"
                }
                to="/shop"
              >
                SHOP .
              </NavLink>
              <ul className="dropdown-menu">
                <div className="left-img">
                  <div className="img1">
                    <img src={nav1} className="img_one" alt="nav1" />
                  </div>
                  <div className="img2">
                    <img src={nav2} className="img_two" alt="nav2" />
                  </div>
                </div>
                <li>
                  <ul className="ul-marg-right">
                    <h5>MEN</h5>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Polo</a>
                    </li>
                    <li>
                      <a href="#">T-Shirts</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                    <li>
                      <a href="#">Shorts</a>
                    </li>
                    <li>
                      <a href="#">SwimeWear</a>
                    </li>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                    <li>
                      <a href="#">Jacket</a>
                    </li>
                    <li>
                      <a href="#">Pullovers</a>
                    </li>
                    <li>
                      <a href="#">Hoodies</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="ul-marg-right">
                    <h5>BRANDS</h5>
                    <li>
                      <a href="#">SKECHERS</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <h5>KIDS</h5>
                    <li>
                      <a href="#">Boys</a>
                    </li>
                    <li>
                      <a href="#">Girls</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/winter"
              >
                WINTER ’24 .
              </NavLink>
              <ul className="dropdown-menu mLeft">
                <li className="dropdown-li">
                  <div className="container-ul">
                    <h3>WINTER 2024</h3>
                    <div className="header-dropDown">
                      <a className="ul-a" href="#">
                        VIEW COLLECTION
                      </a>
                    </div>
                    <ul>
                      <li>
                        <a href="#">SWEETSHIRTS</a>
                      </li>
                      <li>
                        <a href="#">PULLOVERS</a>
                      </li>
                      <li>
                        <a href="#">JACKETS</a>
                      </li>
                      <li>
                        <a href="#">SHIRTS</a>
                      </li>
                      <li>
                        <a href="#">VEST</a>
                      </li>
                      <li>
                        <a href="#">SHOES</a>
                      </li>
                      <li>
                        <a href="#">PANTS</a>
                      </li>
                      <li>
                        <a href="#">COATS</a>
                      </li>
                    </ul>
                  </div>
                  <ul className="right-img">
                    <li className="img1">
                      <img src={nav3} className="two-sec-nav-one" alt="nav1" />
                    </li>
                    <li className="img2">
                      <img src={nav2} className="two-sec-nav" alt="nav2" />
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/summer"
              >
                SUMMER .
              </NavLink>
              <ul className="dropdown-menu">
                <li className="dropdown-li">
                  <ul className="summer ul-marg-right">
                    <li>
                      <a href="#">Shirts </a>
                    </li>
                    <li>
                      <a href="#">T-Shirts</a>
                    </li>
                    <li>
                      <a href="#">Polos</a>
                    </li>
                  </ul>
                  <ul className="summer ul-marg-right">
                    <li>
                      <a href="#">Shorts</a>
                    </li>
                    <li>
                      <a href="#">SwimWear</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/WomensBags"
              >
                WomensBags
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/MobileAccessories"
              >
                MobileAccessories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/SportSacces"
              >
                SportAacces
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/shoes"
              >
                SHOES .
              </NavLink>
              <ul className="dropdown-menu">
                <li className="dropdown-li">
                  <ul className="ps-0">
                    <li>
                      <Link href="#">SKECHERS </Link>
                    </li>
                    <li>
                      <Link href="#"> SUMMER</Link>
                    </li>
                    <li>
                      <Link href="#"> BOOTS</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/sale"
              >
                HOT DEALS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/about"
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
