import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="Current-weather row align-items-center">
      <div className="col-6 weather-details">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />, {props.data.description}
          </li>
          <li>
            Humidity: <span className="humidity">{props.data.humidity}%</span>
            <br /> Wind: <span className="wind">{props.data.wind}km/h</span>
          </li>
        </ul>
      </div>
      <div className="col-6 city-temperature d-flex justify-content-end">
        <div className="current-weather-icon">
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
    </div>
  );
}
