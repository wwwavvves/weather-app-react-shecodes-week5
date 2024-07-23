import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
  let lon = -9.1;
  let lat = 38.7;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div>
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="forecast-icon"
            />
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">20º</span>{" "}
            <span className="forecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
