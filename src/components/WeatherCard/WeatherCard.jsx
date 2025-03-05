import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  const weatherIcon = `https://openweathermap.org/img/wn/${weather.Icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{new Date(weather.Date).toLocaleDateString("en-US", { weekday: "long" })}</h2>
      <p>{weather.Date}</p>
      <img src={weatherIcon}/>
      <h3>Max {weather.MaxTemp}°C</h3>
      <h3>Min {weather.MinTemp}°C</h3>
      <h3>{weather.WindSpeed} m/s wind</h3>
    </div>
  );
};

export default WeatherCard;