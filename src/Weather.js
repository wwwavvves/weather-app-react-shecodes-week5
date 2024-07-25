import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: {
        latitude: response.data.coordinates.latitude,
        longitude: response.data.coordinates.longitude,
      },
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      temperature: Math.round(response.data.temperature.current),
    });
  }

  function search() {
    const apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              className="search-input"
              autoFocus="on"
              required
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="search-btn" />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
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
    search();
    return "Loading...";
  }
}
