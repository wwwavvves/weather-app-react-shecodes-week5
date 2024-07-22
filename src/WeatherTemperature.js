import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature d-flex">
        <div className="current-temperature">{props.celsius}</div>
        <div className="temperature-units">
          <span className="celsius">
            <strong>ºC</strong>
          </span>
          <span> | </span>
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            ºF
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = Math.round(props.celsius * (9 / 5) + 32);
    return (
      <div className="WeatherTemperature d-flex">
        <div className="current-temperature">{fahrenheit}</div>
        <div className="temperature-units">
          <a href="/" className="celsius" onClick={showCelsius}>
            ºC
          </a>
          <span> | </span>
          <span className="fahrenheit">
            <strong>ºF</strong>
          </span>
        </div>
      </div>
    );
  }
}
