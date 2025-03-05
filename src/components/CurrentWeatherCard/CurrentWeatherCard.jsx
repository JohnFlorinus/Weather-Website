import React from "react";
import "./CurrentWeatherCard.css";

const CurrentWeatherCard = ({ weather, city }) => {
  // Check that weather exists to avoid errors
  if (!weather) return null;

  const weatherIcon = `https://openweathermap.org/img/wn/${weather.Icon}@2x.png`;

  return (
    <div className="current-weather-card">
      <h2>Current Weather in {city}</h2>
      <img src={weatherIcon} alt="Current weather icon" />
      <h2>{weather.MaxTemp}°C</h2>
    </div>
  );
};

export default CurrentWeatherCard;