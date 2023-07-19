import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { BsCart2 } from "react-icons/bs";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
import AppHeader from "../Appheader/Appheader";
import { getToken } from "../../helpers";
import { GiPirateSkull} from "react-icons/gi";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);

  const [toggle, settoggle] = useState(false);

  const categories = useSelector((state) => state.categoryReducer.categories);
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalItems = 0;
  cart.forEach((item) => (totalItems += item.quantity));

  // async function fetchnew(e) {
  //   setSearch(e.target.value.toLowerCase());
  //   console.log(search);
  // }

  return (
    <>
      <nav className="Navbar">
        <div className="container nav-container">
          <div className="nav-left">
            {getToken() && (

              <ul className="link-group">
                
                {categories?.map((category) => (
                  <li className="hover-link" key={category.id}>
                    <Link
                      className="link"
                      to={`/category/${category.attributes.key}`}
                    >
                      {category.attributes.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="nav-center">
            <Link to="/">
              <h1 className="banner">Pirate Kart <GiPirateSkull className="pi"></GiPirateSkull> </h1>
            </Link>
          </div>
          <div className="nav-right">
            
            {getToken() && (
              <div className="searchbar">
                <Link to="/search">
                  <button
                    className="btn hover-link"
                    onClick={() => {
                      settoggle(true);
                    }}
                  >
                    Search
                  </button>
                </Link>
              </div>
            )}
            {getToken() && (
              <div
                className="nav-cart hover-link"
                onClick={() => setOpenCart(!openCart)}
              >
                <BsCart2 className="icon" />
                {totalItems > 0 && (
                  <span className="cart-count center">{totalItems}</span>
                )}
              </div>
            )}
            <div className="sign">
              <AppHeader />
            </div>
          </div>
        </div>
      </nav>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  );
}

export default Navbar;
