import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function FiveDaysForecast() {
  const [data, setData] = useState(null);

  const location = useLocation();
  const { cityName } = location.state;

  const apiKey = "d018ca370069f1ee2ddb0d48ab391edd";

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div className="table-responsive">
          <table className="table table-hover table-dark table-striped border-light">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weather</th>
                <th>Description</th>
                <th>Temperature</th>
                <th>Feels like</th>
                <th>Preassure</th>
                <th>Humidity</th>
                <th>Widn Speed</th>
              </tr>
            </thead>
            <tbody>
              {data.list.map((item) => (
                <tr>
                  <td>{item.dt_txt}</td>
                  <td>Weather: {item.weather?.[0]?.main}</td>
                  <td>Description: {item.weather?.[0]?.description}</td>
                  <td>Temperature: {item.main?.temp}&#176;C</td>
                  <td>Feels like: {item.main?.feels_like}&#176;C</td>
                  <td>Preassure: {item.main?.pressure}hPa</td>
                  <td>Humidity: {item.main?.humidity}%</td>
                  <td>Wind speed: {item.wind?.speed} m/s</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FiveDaysForecast;
