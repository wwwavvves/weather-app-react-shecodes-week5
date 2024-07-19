import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      temperature: Math.round(response.data.temperature.current),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form /*onSubmit={handleSubmit}*/>
            <input
              type="search"
              placeholder="Enter a city"
              className="search-input"
              autoFocus="on"
              /*onChange={handleChange}*/
            />
            <input type="submit" value="Search" className="search-btn" />
          </form>
        </div>
        <div className="Current-weather row align-items-center">
          <div className="col-6 weather-details">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />,{" "}
                {weatherData.description}
              </li>
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}%</span>
                <br /> Wind:{" "}
                <span className="wind">{weatherData.wind}km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-6 city-temperature d-flex justify-content-end">
            <div className="current-weather-icon">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
            <div className="current-temperature">{weatherData.temperature}</div>
            <div className="celsius">ºC</div>
          </div>
        </div>
        <footer className="Footer">
          Coded by{" "}
          <a
            href="https://github.com/wwwavvves"
            target="_blank"
            rel="noreferrer"
          >
            Diana Guerreiro
          </a>{" "}
          and open-sourced at{" "}
          <a
            href="https://github.com/wwwavvves/weather-app-react-shecodes-week5"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
