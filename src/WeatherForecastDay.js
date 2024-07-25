import React from "react";

export default function WeatherForecastDay(props) {
  function temperatureMax() {
    let temperature = Math.round(props.forecastDay.temperature.maximum);
    return `${temperature}º`;
  }

  function temperatureMin() {
    let temperature = Math.round(props.forecastDay.temperature.minimum);
    return `${temperature}º`;
  }

  function day() {
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecastDay.time * 1000);
    let day = date.getDay()

    return weekdays[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <div>
        <img
          src={props.forecastDay.condition.icon_url}
          alt={props.forecastDay.condition.description}
          className="forecast-icon"
        />
      </div>
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">{temperatureMax()}</span>{" "}
        <span className="forecast-temperature-min">{temperatureMin()}</span>
      </div>
    </div>
  );
}
