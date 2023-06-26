import React, { useState } from "react";
import "./Weather.css";

export default function Converettemp(props) {
  const [unit, setUnit] = useState("Celsius");

  function Tofaren(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function Tocel(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  if (unit === "Celsius") {
    return (
      <div className="tempbox d-flex justify-content-center"> 
        <span className="temperature display-2 fw-bold">{props.temp}</span>
        <span className="unit">
          °C | <a href="/" onClick={Tofaren}>°F</a>
        </span>
      </div>
    );
  } else {
    let farentemp = Math.round((props.temp * 9/5) + 32);
    return (
      <div className="tempbox d-flex justify-content-center"> 
        <span className="temperature display-2 fw-bold">{farentemp}</span>
        <span className="unit">
          <a href="/" onClick={Tocel}>°C</a> | °F
        </span>
      </div>
    );
  }
}
