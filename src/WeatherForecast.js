import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (!loaded) {
    let apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
    let lat = props.data.coordinates.latitude;
    let lon = props.data.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay forecastDay={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecastDay={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecastDay={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecastDay={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecastDay={forecast[4]} />
          </div>
        </div>
      </div>
    );
  }
}
