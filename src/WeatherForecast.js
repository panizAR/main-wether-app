import React, { useState } from "react";
import Weathericon from "./Weathericon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);
  function handleForcast(response) {
    setForcast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    function getDay(index) {
      let date = new Date(forcast[index].dt * 1000);
      let day = date.getDay();
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      console.log(daysOfWeek[day]);
      return daysOfWeek[day];
    }

    return (
      <div className="row justify-content-between mt-3">
        {forcast.map({
          function(dailyforcast, index) {
            return (
              <div className="col-2 text-center" key={index}>
                <div className="box-item-pre">
                  <p>{getDay(index)}</p>
                  <Weathericon data={dailyforcast.weather[0].icon} size={40} />
                  <p>
                    <span className="min-temp">
                      {Math.round(dailyforcast.temp.min)}°
                    </span>{" "}
                    <span className="max-temp opacity-75">
                      {" "}
                      {Math.round(dailyforcast.temp.max)}°
                    </span>
                  </p>
                </div>
              </div>
            );
          },
        })}
      </div>
    );
  } else {
    let apikey = "b40b135798f82a05aed08769f9275f50";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let urlforcast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
    axios.get(urlforcast).then(handleForcast);
  }
}
