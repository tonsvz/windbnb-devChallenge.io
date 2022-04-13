import React, { useState } from "react";
import "./Overlay.scss";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Counter from "../Counter/Counter";
import data from "../stays.json";

const Overlay = ({ toggleStatus, dataSender, guestSender }) => {
  const [adultCounter, setAdultCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  const [petCounter, setPetCounter] = useState(0);
  const [City, setCity] = useState("Whole");

  const cities = {
    city1: "Helsinki",
    city2: "Turku",
    city3: "Oulu",
    city4: "Vaasa",
  };

  const cityFilter = () => {
    const dataFilter = data.filter((e) => {
      return (
        e.city === City &&
        e.maxGuests > adultCounter + childCounter &&
        e.country === "Finland"
      );
    });
    {
      dataSender(dataFilter);
    }
  };

  const guestFilter = () => {
    data.filter((e) => {
      return e.maxGuests > adultCounter + childCounter;
    });
    guestSender(guestFilter);
  };

  return (
    <div
      className={
        toggleStatus
          ? "overlay-container overlay-container-show"
          : "overlay-container"
      }
    >
      <div className="overlay-input-wrapper">
        <div className="location-wrapper">
          <div className="location-input">
            <p>Location</p>
            <div>{`${City}, Finland`}</div>
          </div>
          <div className="location-list">
            <ul>
              <li
                onClick={() => {
                  setCity(cities.city1);
                  // console.log(City);
                }}
              >
                <MdLocationOn className="location-icon" /> &nbsp; Helsinki,
                Finland
              </li>
              <li
                onClick={() => {
                  setCity(cities.city2);
                }}
              >
                {" "}
                <MdLocationOn className="location-icon" /> &nbsp; Turku, Finland
              </li>
              <li
                onClick={() => {
                  setCity(cities.city3);
                }}
              >
                {" "}
                <MdLocationOn className="location-icon" /> &nbsp; Oulu, Finland
              </li>
              <li
                onClick={() => {
                  setCity(cities.city4);
                }}
              >
                {" "}
                <MdLocationOn className="location-icon" /> &nbsp; Vaasa, Finland
              </li>
            </ul>
          </div>
        </div>
        <div className="guest-wrapper">
          <div className="guest-input">
            <p>Guests</p>
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
              decrement={() => setAdultCounter(Math.max(0, adultCounter - 1))}
            />
            <Counter
              guest="Kids"
              age="Age: 2 - 12"
              increment={() => setChildCounter(childCounter + 1)}
              decrement={() => setChildCounter(Math.max(0, childCounter - 1))}
            />
            <Counter
              guest="Pets "
              increment={() => setPetCounter(petCounter + 1)}
              decrement={() => setPetCounter(Math.max(0, petCounter - 1))}
            />
          </div>
        </div>
        <div className="button-wrapper">
          <button type="submit" onClick={cityFilter}>
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
