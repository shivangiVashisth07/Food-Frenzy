import React, { useState } from "react";
import Logo from "../Images/Logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = function () {
  const [loggedInUser, setLoggedInUser] = useState("true");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="container sticky">
        <img src={Logo} alt="Food Frenzy" className="logo" />
        <div className="nav-itemList">
          <ul>
            <Link to="/">
              <li className="home">Home</li>
            </Link>
            <Link to="/about">
              <li className="profile">About us</li>
            </Link>
            <Link to="/cart">
              <li className="Cart">Cart-{cartItems.length} items</li>
            </Link>

            <li>
              {loggedInUser === "false" ? (
                <button
                  className="logOut"
                  onClick={() => {
                    setLoggedInUser("true");
                  }}
                >
                  Log Out
                </button>
              ) : (
                <button
                  className="logIn"
                  onClick={() => {
                    setLoggedInUser("false");
                  }}
                >
                  Log In
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
