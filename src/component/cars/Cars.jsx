import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import car1 from "../../assets/car3.png";
import car2 from "../../assets/car4.png";
import car3 from "../../assets/car2.png";
import car4 from "../../assets/car1.png";
import style from "./cars.module.css";
import { Link } from "react-router-dom";

export default function Cars() {
  
  const [cars, setCars] = useState([]);
  const [loading, setaloading] = useState(true);
  const [error, setError] = useState(null);
  const carImages = [car1, car2, car3, car4];
  const [showCars, setShowCars] = useState(false);
  const [searchTearm, setsearchTearm] = useState("");
  async function getcars() {
    try {
      const response = await axios.get("https://myfakeapi.com/api/cars/");
      if (Array.isArray(response.data.cars)) {
        setCars(response.data.cars);
      } else {
        console.error("not array", response.data.cars);
        setCars([]);
      }
    } catch (err) {
      console.error("error", err);
      setError(err);
    } finally {
      setaloading(false);
    }
  }
  useEffect(() => {
    getcars();
  }, []);
  const filteredcar = cars.filter((item) =>
    item.car.toLowerCase().includes(searchTearm.toLowerCase())
  );
  const carToShow =
    searchTearm.trim() === ""
      ? cars
      : filteredcar.length > 0
      ? filteredcar
      : cars;

  if (loading) return <p>laoding.........</p>;
  if (error) return <p>error......</p>;
  return (
    <>
      <>
        <Link to="/">Home</Link>
        <div className={`${style.search} my-5 `}>
          <div className={style.searchGroup}>
            <span className={style.icon}>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <input
              type="text"
              placeholder="Search By Name"
              className={style.searchInput}
              value={searchTearm}
              onChange={(e) => setsearchTearm(e.target.value)}
            />

            <button type="button" className={`${style.searchBtn} `}>
              search
            </button>
          </div>
        </div>
        <div className={`${style.parag}`}>
          <span>
            <p>POPULAR RENTAL DEALS</p>
          </span>

          <h3>Most popular cars rental deals</h3>
        </div>
        <div className="container">
          <div className="row">
            {carToShow.slice(0, 16).map((item) => {
              const imageIndex = (item.id - 1) % carImages.length;
              return (
                <div key={item.id} className="col-md-3 mt-3">
                  <div className={style.card}>
                    <img
                      src={carImages[imageIndex]}
                      alt={item.car}
                      className={style.img}
                    />
                    <h4>
                      {item.car} {item.car_model}
                    </h4>
                    <div className={style.rate}>
                      <i className="fa-solid fa-star"></i>
                      <p>2.8(1345 reviews)</p>
                    </div>
                    <div className={style.features}>
                      <p>
                        <i className="fa-solid fa-user"></i> 4 Passengers
                      </p>
                      <p>
                        <i className="fa-solid fa-gear"></i> Air conditioning
                      </p>
                      <p>
                        <i className="fa-solid fa-calendar-days "></i>2021
                      </p>
                      <p>
                        <i className="fa-solid fa-door-open"></i> 4 Doors
                      </p>
                    </div>
                    <hr />
                    <div className={style.price}>
                      <p>price</p>
                      <h5>{item.price}</h5>
                    </div>
                   <Link to={`/car/${item.id}`}>
                     <button className={style.butt} >
                      View details →{item.availability}
                    </button>
                   </Link>
                  
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <nav aria-label="Page navigation example" className={style.pagi}>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </>
    </>
  );
}
