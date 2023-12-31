import React, { useState, useEffect } from "react";
import Dailyforecaste from "./Dailyforecaste";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleForcast(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row justify-content-between mt-3">
        {forcast.map(function (dailyday, index) {
          if (index < 5) {
            return (
              <div className="col text-center my-2" key={index}>
                <Dailyforecaste data={dailyday} />
              </div>
            );
          }
          return null;
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
