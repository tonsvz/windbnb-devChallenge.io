import React, { useState } from "react";
import placesData from "../stays.json";
import "./Main.scss";
import { AiFillStar } from "react-icons/ai";
import Overlay from "../Overlay/Overlay";

const Main = () => {
  const [city, setCity] = useState(null);
  const [maxGuests, setMaxGuests] = useState([]);
  const dataHandler = (data) => {
    const newData = data.map((e) => {
      return e.city;
    });
    setCity(newData);
    console.log(data);
  };

  const guestHandler = (data) => {
    const newMaxGuests = data;
    setMaxGuests(newMaxGuests);
    console.log(newMaxGuests);
  };

  return (
    <>
      <Overlay dataSender={dataHandler} guestSender={guestHandler} />
      <div className="main-container">
        <div className="main-title">
          <h2>Stays in Finland</h2>
          <div className="stays">
            <p>{placesData.length}+ stays</p>
          </div>
        </div>

        <div className="places-gallery places-gallery-shadow">
          {placesData
            .filter((e) => {
              if (city === null) {
                console.log(e.maxGuests);
              } else if (e.city === city[0]) {
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
