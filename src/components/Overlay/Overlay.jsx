import React from "react";
import "./Overlay.scss";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const Overlay = () => {
  return (
    <div className="overlay-container">
      <div className="overlay-input-wrapper">
        <div className="location-wrapper">
          <div className="location-input">Location</div>
          <div className="location-list">
            <ul>
              <li>
                <MdLocationOn /> &nbsp; Helsinki, Finland
              </li>
              <li>
                {" "}
                <MdLocationOn /> &nbsp; Turku, Finland
              </li>
              <li>
                {" "}
                <MdLocationOn /> &nbsp; Oulu, Finland
              </li>
              <li>
                {" "}
                <MdLocationOn /> &nbsp; Vaasa, Finland
              </li>
            </ul>
          </div>
        </div>
        <div className="guest-wrapper">
          <div className="guest-input">
            Guests <span>0</span>
          </div>
          <div className="guest-counter">
            <div className="counter">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <button type="submit">
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
