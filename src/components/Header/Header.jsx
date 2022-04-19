import React, { useState } from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";
import Overlay from "../Overlay/Overlay";
import { GrClose } from "react-icons/gr";

const Header = () => {
  // const [toggler, setToggler] = useState(true);
  // const [buttonToggler, setButtonToggler] = useState(true);
  // const togglerClass = () => {
  //   setToggler(!toggler);
  // };

  // const buttonTogglerClass = () => {
  //   setButtonToggler(!buttonToggler);
  //   console.log(buttonToggler);
  // };

  return (
    <>
      {/* <div className="header-container">
        <div className="title">
          <img src="/images/triangleLogo.png" alt="" />
          <h1>windbnb</h1>
        </div>
        <div className="input-container">
          <button
            onClick={() => {
              togglerClass();
              buttonTogglerClass();
            }}
          >
            Whole, Finland
          </button>
          <button
            onClick={() => {
              togglerClass();
              buttonTogglerClass();
            }}
          >
            Add Guests
          </button>
          <button
            onClick={() => {
              togglerClass();
              buttonTogglerClass();
            }}
          >
            {<FaSearch className="search-icon" />}
          </button>
        </div>
        <button
          className={buttonToggler ? "close-button" : "close-button-hide"}
          onClick={() => {
            togglerClass();
            buttonTogglerClass();
          }}
        >
          <GrClose />
        </button>
      </div> */}
    </>
  );
};

export default Header;
