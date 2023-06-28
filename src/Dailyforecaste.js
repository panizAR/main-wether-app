import React from "react";
import Weathericon from "./Weathericon";

export default function Dailyforecaste(props) {
  function Day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[day];
  }
  return (
    
      <div className="box-item-pre">
        <p>{Day()}</p>
        <Weathericon data={props.data.weather[0].icon} size={40} />
        <p>
          <span className="min-temp">{Math.round(props.data.temp.min)}°</span>{" "}
          <span className="max-temp opacity-75">
            {" "}
            {Math.round(props.data.temp.max)}°
          </span>
        </p>
      </div>
  );
}
