import React, { useState } from "react";
import "./Overlay.scss";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Counter from "../Counter/Counter";

const Overlay = () => {
  const [adultCounter, setAdultCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  const [petCounter, setPetCounter] = useState(0);
  return (
    <div className="overlay-container">
      <div className="overlay-input-wrapper">
        <div className="location-wrapper">
          <div className="location-input">
            <p>Location</p>
            <div>Helsinki, Finland</div>
          </div>
          <div className="location-list">
            <ul>
              <li>
                <MdLocationOn className="location-icon" /> &nbsp; Helsinki,
                Finland
              </li>
              <li>
                {" "}
                <MdLocationOn className="location-icon" /> &nbsp; Turku, Finland
              </li>
              <li>
                {" "}
                <MdLocationOn className="location-icon" /> &nbsp; Oulu, Finland
              </li>
              <li>
                {" "}
                <MdLocationOn className="location-icon" /> &nbsp; Vaasa, Finland
              </li>
            </ul>
          </div>
        </div>
        <div className="guest-wrapper">
          <div className="guest-input">
            <p>
              <span>
                {adultCounter} {adultCounter !== 1 ? "Adults" : "Adult"}, &nbsp;
                {childCounter} {childCounter !== 1 ? "Children" : "Child"},
                &nbsp;{petCounter} {petCounter !== 1 ? "Pets" : "Pet"}
              </span>
            </p>
          </div>
          <div className="guest-counter">
            <Counter
              guest="Adult"
              age="Age: 13 or above"
              increment={() => setAdultCounter(adultCounter + 1)}
              decrement={() => setAdultCounter(adultCounter - 1)}
            />
            <Counter
              guest="Kids"
              age="Age: 2 or above"
              increment={() => setChildCounter(childCounter + 1)}
              decrement={() => setChildCounter(childCounter - 1)}
            />
            <Counter
              guest="Pets "
              increment={() => setPetCounter(petCounter + 1)}
              decrement={() => setPetCounter(petCounter - 1)}
            />
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
