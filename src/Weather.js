import React from "react";
import { UseState } from "react";
import "./Weather.css";
import axios from "axios";

export default function weather() {
  let [Ready, SetReady] = UseState(false);

  const [Temprature, SetTemprature] = UseState(null);

  function handledata(response) {
    console.log(response.data);
    SetTemprature(response.data.main.temp);
    SetReady(true);
  }

  if (Ready) {
    return (
      <div>
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
                <input
                  type="submit"
                  class="btn btn-primary w-100"
                  value="Search"
                />
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
              <p className="display-1 fw-bold">
                <span className="temprature">{Temprature}</span>
                <span className="unit">°c</span>
              </p>
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

          <div className="row justify-content-between mt-3">
            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weathericon"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>

            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weathericon"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>

            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weathericon"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>

            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weathericon"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>

            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weathericon"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          This project was coded by Paniz Rangraz and is open-sourced on
          <a href="https://github.com/panizAR/main-wether-app">GitHub</a> and
          hosted on
          <a href="https://bright-quokka-7dd6e7.netlify.app/">Netlify</a>
        </div>
      </div>
    );
  } else {
    let apikey = "62bc298785543e137bc6756e514eb1c3";
    let city = "New York";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(url).then(handledata);
    return "loding...";
  }
}
