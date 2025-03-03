import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
   //förfina vädervariabler
  const { weather: weatherDetails, dt, wind } = weather;
  const { temp, humidity, pressure } = weather.main;
  const { description } = weatherDetails[0];

  // mappa beskrivning till väderikon
  const getWeatherIcon = (desc) => {
    const lowerDesc = desc.toLowerCase();
    if (lowerDesc.includes("clear")) {
      return "☀️";
    } else if (lowerDesc.includes("few clouds")) {
      return "⛅️";
    } else if (lowerDesc.includes("scattered clouds")) {
      return "🌤️";
    } else if (lowerDesc.includes("broken clouds") || lowerDesc.includes("overcast")) {
      return "☁️"; 
    } else if (lowerDesc.includes("rain")) {
      return "🌧️"; 
    } else if (lowerDesc.includes("thunderstorm")) {
      return "⛈️";
    } else if (lowerDesc.includes("snow")) {
      return "❄️";
    } else if (lowerDesc.includes("mist") || lowerDesc.includes("fog")) {
      return "🌫️"; 
    } else {
      return "🌈";
    }
  };

  const icon = getWeatherIcon(description);

  return (
    <div className="weather-card">
      <h1>{new Date(dt * 1000).toLocaleDateString("en-US", { weekday: "long" })} {icon}</h1>
      <h3>{new Date(dt * 1000).toLocaleDateString()}</h3>
      <p>Average Temperature: {temp}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;