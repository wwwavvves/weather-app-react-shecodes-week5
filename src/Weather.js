import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>Lisbon</h1>
          <ul>
            <li>Tuesday 17:50, clear sky</li>
            <li>Humidity: 56%, Wind: 10.29km/h</li>
          </ul>
        </div>
        <div className="col-6">
            24ºC
        </div>
      </div>
    </div>
  );
}
