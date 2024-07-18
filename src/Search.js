import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");

  function showWeather(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    const apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    event.preventDefault();
    console.log("ready");

    axios.get(apiUrl).then(showWeather);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          className="search-input"
          autoFocus="on"
          onChange={handleChange}
        />
        <input type="submit" value="Search" className="search-btn" />
      </form>
    </div>
  );
}
