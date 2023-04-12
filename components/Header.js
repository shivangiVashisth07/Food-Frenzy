import React, { useState } from "react";

const Header = function () {
  const [loggedInUser, setLoggedInUser] = useState("true");
  return (
    <>
      <div className="container sticky">
        <img
          src="https://yt3.googleusercontent.com/ytc/AL5GRJW0WUTm6OJi5WtnNcJGnFHfBrOZZwtInnaZoCYEeA=s176-c-k-c0x00ffffff-no-rj"
          alt="Food Frenzy"
          className="logo"
        />
        <div className="nav-itemList">
          <ul>
            <li className="home">Home</li>
            <li className="profile">Profile</li>
            <li className="Cart">Cart</li>
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
