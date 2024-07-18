import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row align-items-center">
        <div className="col-6 weather-details">
          <h1>Lisbon</h1>
          <ul>
            <li>Tuesday 17:50, clear sky</li>
            <li>
              Humidity: <span className="humidity">56%</span>, Wind:{" "}
              <span className="wind">10.29km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6 city-temperature d-flex justify-content-end">
          <div className="current-weather-icon">☀️</div>
          <div className="current-temperature">24</div>
          <div className="celsius">ºC</div>
        </div>
      </div>
    </div>
  );
}
