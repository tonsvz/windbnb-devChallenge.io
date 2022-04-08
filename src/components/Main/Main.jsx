import React from "react";
import placesData from "../stays.json";
import "./Main.scss";
import { AiFillStar } from "react-icons/ai";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-title">
        <h2>Stays in Finland</h2>
        <div className="stays">
          <p>{placesData.length}+ stays</p>
        </div>
      </div>

      <div className="places-gallery">
        {placesData.map((value, index) => {
          Object.assign(value, { index });
          return (
            <div className="place-container" id={index} key={index}>
              <div className="card">
                <div className="img-wrapper">
                  <img src={value.photo} alt="" className="card-img" />
                </div>
                <div className="room-description">
                  <div
                    className={value.superHost ? "super-host" : "no-super-host"}
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
  );
};

export default Main;
