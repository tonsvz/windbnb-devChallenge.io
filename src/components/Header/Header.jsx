import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title">
        <img src="/images/triangleLogo.png" alt="" />
        <h1>windbnb</h1>
      </div>

      <div className="input-container">
        <button>Location</button>
        <button>Add Guests</button>
        <button>{<FaSearch className="search-icon" />}</button>
      </div>
    </div>
  );
};

export default Header;
