import React, { useState } from "react";

import "./Weather.css";
import axios from "axios";
import Dateformat from "./Dateformat";
import Weathericon from "./Weathericon";
import Converettemp from "./Converettemp";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  const [cityname, setCityname] = useState(props.city);

  function handledata(response) {
    console.log(response.data);
    setWeatherdata({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      temprature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function Search() {
    let apikey = "b40b135798f82a05aed08769f9275f50";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
    axios.get(url).then(handledata);
  }

  function Formsubmited(event) {
    event.preventDefault();
    Search();
  }
  function CityNamechange(event) {
    setCityname(event.target.value);
  }

  if (weatherdata.ready) {
    return (
      <div className="container">
        <div className="box text-white">
          <form onSubmit={Formsubmited}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  onChange={CityNamechange}
                />
              </div>

              <div className="col-3">
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="Search"
                />
              </div>
            </div>
          </form>

          <div className="row mt-2">
            <h1>{weatherdata.city}</h1>
            <ul>
              <li>
                <Dateformat data={weatherdata.date} />
              </li>
              <li>{weatherdata.description}</li>
            </ul>
          </div>

          <div className="row">
            <div className="col-6 text-center ">
              <p>
                <Converettemp temp={Math.round(weatherdata.temprature)} />
              </p>
            </div>
            <div className="col-6 text-center ">
              <Weathericon data={weatherdata.icon} />
            </div>
          </div>

          <div className="row">
            <div className="col-4 text-center">
              <div className="box-item">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="iconimg"
                  className="w-25"
                ></img>
                <p>Humidity</p>
                <p>
                  <span>{weatherdata.humidity}</span> %
                </p>
              </div>
            </div>

            <div className="col-4 text-center">
              <div className="box-item">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="iconimg"
                  className="w-25"
                ></img>
                <p>Wind</p>
                <p>
                  <span>{weatherdata.wind}</span> km/h
                </p>
              </div>
            </div>

            <div className="col-4 text-center">
              <div className="box-item">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="iconimg"
                  className="w-25"
                ></img>
                <p>pressure</p>
                <p>
                  <span>{weatherdata.pressure}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-between mt-3">
            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="iconimg"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>

            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="iconimg"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>

            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="iconimg"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>

            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="iconimg"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>

            <div className="col-2 text-center">
              <div className="box-item-pre">
                <p>Mon</p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="iconimg"
                ></img>
                <p>16°c 16°c</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          This project was coded by Paniz Rangraz and is open-sourced on
          <a href="https://github.com/panizAR/main-wether-app"> GitHub</a> and
          hosted on
          <a href="https://bright-quokka-7dd6e7.netlify.app/"> Netlify</a>
        </div>
      </div>
    );
  } else {
    Search();
    return "loading...";
  }
}
