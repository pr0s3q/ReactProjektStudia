import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

// error.response.statusText

function CurrentWeather({ callback }) {
  const [data, setData] = useState([]);

  const location = useLocation();
  const { cityName } = location.state;

  const apiKey = "d018ca370069f1ee2ddb0d48ab391edd";

  const [status, setStatus] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        );
        setStatus(response.status);
        setData(response.data);
        callback(`${response.status} - ${response.statusText}`);
      } catch (error) {
        console.error("Error fetching data:", error);
        callback(`${error.response.status} - ${error.response.statusText}`);
      }
    };

    fetchData();
  }, []);

  return status === 200 ? (
    <div>
      {data && (
        <>
          <h5>Lon: {data.coord?.lon}</h5>
          <h5>Lat: {data.coord?.lat}</h5>
          <h5>Weather: {data.weather?.[0]?.main}</h5>
          <h5>Description: {data.weather?.[0]?.description}</h5>
          <h5>Temperature: {data.main?.temp}&#176;C</h5>
          <h5>Feels like: {data.main?.feels_like}&#176;C</h5>
          <h5>Preassure: {data.main?.pressure}hPa</h5>
          <h5>Humidity: {data.main?.humidity}%</h5>
          <h5>Wind speed: {data.wind?.speed} m/s</h5>
        </>
      )}
    </div>
  ) : (
    <></>
  );
}

export default CurrentWeather;
