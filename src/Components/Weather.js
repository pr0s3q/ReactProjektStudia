import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import CurrentWeather from "./CurrentWeather";
import FiveDaysForecast from "./FiveDaysForecast";

function Weather() {
  const location = useLocation();
  const { cityName } = location.state;

  const getStatus = (info) => {
    setStatus(info);
  };

  const [status, setStatus] = useState();

  return (
    <div className="container text-center">
      <h1>{cityName}</h1>
      <h3>{status}</h3>
      <CurrentWeather callback={getStatus} />
      <hr />
      <FiveDaysForecast />
    </div>
  );
}

export default Weather;
