import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div className="box text-white">
      <form>
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              class="form-control"
            />
          </div>

          <div class="col-3">
            <input type="submit" class="btn btn-primary w-100" value="Search" />
          </div>
        </div>
      </form>

      <div className="row mt-2">
        <h1>New York</h1>
        <ul>
          <li>Sunday 21:15</li>
          <li>Broken Clouds</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6 text-center ">
          <p className="display-1 fw-bold">16°c</p>
        </div>
        <div className="col-6 text-center ">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weathericon"
            className="w-25"
          ></img>
        </div>
      </div>

      <div className="row">
        <div className="col-4 text-center">
          <div className="box-item">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weathericon"
              className="w-25"
            ></img>
            <p>Humidity</p>
            <p>58%</p>
          </div>
        </div>

        <div className="col-4 text-center">
          <div className="box-item">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weathericon"
              className="w-25"
            ></img>
            <p>Wind</p>
            <p>27 km/h</p>
          </div>
        </div>

        <div className="col-4 text-center">
          <div className="box-item">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weathericon"
              className="w-25"
            ></img>
            <p>Precipitation</p>
            <p>0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
