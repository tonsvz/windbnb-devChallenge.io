import React, { useState } from "react";
import placesData from "../stays.json";
import "./Main.scss";
import { AiFillStar } from "react-icons/ai";
import Overlay from "../Overlay/Overlay";
import { GrClose } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

const Main = () => {
  const [city, setCity] = useState("Whole,Finland");
  const [maxGuests, setMaxGuests] = useState("Add Guests");
  //  Header
  const [toggler, setToggler] = useState(true);
  const [buttonToggler, setButtonToggler] = useState(false);

  const togglerClass = () => {
    setToggler(!toggler);
    setButtonToggler(!buttonToggler);
  };

  const buttonTogglerClass = () => {
    setButtonToggler(!buttonToggler);
    console.log(buttonToggler);
  };

  const guestHandler = (guests) => {
    setMaxGuests(guests);
    if (guests === 0) {
      setMaxGuests("Add Guests");
    }
  };

  const cityHandler = (city) => {
    setCity(city);
  };

  return (
    <>
      <Overlay
        guestSender={guestHandler}
        citySender={cityHandler}
        toggleStatus={toggler}
      />

      <div className="header-container">
        <div className="title">
          <img src="/images/triangleLogo.png" alt="" />

          <h1
            className="web-title"
            onClick={() => {
              document.location.reload();
            }}
          >
            windbnb
          </h1>
        </div>
        <div className="input-container">
          <button
            onClick={() => {
              togglerClass();
              buttonTogglerClass();
            }}
          >
            {city}
          </button>
          <button
            onClick={() => {
              togglerClass();
              buttonTogglerClass();
            }}
          >
            {maxGuests}
          </button>
          <button onClick={togglerClass}>
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
      </div>

      <div className="main-container">
        <div className="main-title">
          <h2>Stays in Finland</h2>
          <div className="stays">
            <p>
              {
                placesData.filter((e) => {
                  if (maxGuests === "Add Guests") {
                    return e;
                  } else if (e.city === city && e.maxGuests >= maxGuests) {
                    return e;
                  }
                }).length
              }
              &nbsp; stays
            </p>
          </div>
        </div>

        <div className="places-gallery places-gallery-shadow">
          {placesData
            .filter((e) => {
              if (
                city === 'Whole,Finland"' ||
                maxGuests === "Add Guests" ||
                maxGuests === 0
              ) {
                return e;
              } else if (e.city === city && e.maxGuests >= maxGuests) {
                return e;
              }
            })
            .map((value, index) => {
              Object.assign(value, { index });
              return (
                <div className="place-container" id={index} key={index}>
                  <div className="card">
                    <div className="img-wrapper">
                      <img src={value.photo} alt="" className="card-img" />
                    </div>
                    <div className="room-description">
                      <div
                        className={
                          value.superHost ? "super-host" : "no-super-host"
                        }
                      >
                        <div className={value.superHost ? "sh" : "no-sh"}>
                          <p>Super Host</p>
                        </div>
                      </div>
                      <div className="rating-description">
                        <p>
                          {value.type} {value.beds}
                          {value.beds > 1
                            ? " beds"
                            : " bed" || value.beds == null
                            ? ""
                            : " bed"}
                        </p>
                        <p>
                          <span>
                            <AiFillStar className="star-rating-icon" />
                          </span>{" "}
                          {value.rating}
                        </p>
                      </div>
                    </div>
                    <p className="card-description">{value.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Main;
