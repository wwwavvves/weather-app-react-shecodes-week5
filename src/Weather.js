import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
//   let [city, setCity] = useState("");
    let city = "Lisbon";
    const apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);

    function showWeather(response) {
        console.log("Hello");
    }

//   function showWeather(response) {
//     console.log(response.data);
//   }

//   function handleSubmit(event) {
//     const apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
//     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

//     event.preventDefault();
//     console.log("ready");

//     axios.get(apiUrl).then(showWeather);
//   }

//   function handleChange(event) {
//     setCity(event.target.value);
//   }

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
          <h1>{city}</h1>
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
      <footer className="Footer">
        Coded by{" "}
        <a href="https://github.com/wwwavvves" target="_blank" rel="noreferrer">
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
}
