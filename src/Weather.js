import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div>
      <h1>New York</h1>
      <ul>
        <li>Sunday 21:15</li>
        <li>Broken Clouds</li>
      </ul>
      <div className="row">
        <div className="col-6 text-center align-items-cente">
          <h2>16°c</h2>
        </div>
        <div className="col-6 text-center align-items-cente">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weathericon"
            className="w-25"
          ></img>
        </div>
      </div>
    </div>
  );
}
