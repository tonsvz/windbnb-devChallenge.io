import React, { useState } from "react";
import placesData from "../stays.json";
import "./Main.scss";
import { AiFillStar } from "react-icons/ai";
import Overlay from "../Overlay/Overlay";

const Main = () => {
  const [city, setCity] = useState("");

  const dataHandler = (data) => {
    const newData = data[0] ? data[0].city : null;
    console.log(newData);
    setCity(newData);
  };

  return (
    <>
      <Overlay dataSender={dataHandler} />
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
              if (city === "") {
                return e;
              } else if (e.city === city) {
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
