import React from "react";
import { Link } from "react-router-dom";
import car from "../../assets/car3.png";
import style from "./carDetails.module.css";

export default function CarDetails() {
  return (
    <>
      <Link to="/"> Home / </Link>
      <Link to="/cars"> Cars </Link>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={style.img}>
              <img src={car} alt="ccafy" />
            </div>
          </div>

          <div className="col-md-6">
            <div className={style.detail}>
              
              <button className={style.butt}>WHY CHOOSE US</button>
            
            <h5>We Offer The Best Experience With Our Rental Deals</h5>
            <div className={style.features}>
              <p className="my-3">
                <i className="fa-solid fa-user "></i> 4  Passengers
              </p>
              <p className="my-3">
                <i className="fa-solid fa-gear "></i> Air  conditioning
              </p>
              <p className="my-3">
                <i className="fa-solid fa-calendar-days "></i> 2021
              </p>
              <p className="my-3">
                <i className="fa-solid fa-door-open"></i> 4 Doors
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
