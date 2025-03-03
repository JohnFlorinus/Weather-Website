import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import './App.css';
import Search from "./components/Search/Search";

function App() {
  const [city, setCity] = useState("Stockholm");
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  return (
      <>
          <h1>Weather Forecast</h1>
          <Search 
              city={city} 
              setCity={setCity} 
              setForecast={setForecast} 
              setError={setError}
              error={error} 
          />
          <div className="forecast-container">
              {forecast.map((weather) => (
                  <WeatherCard key={weather.dt} weather={weather} />
              ))}
          </div>
        </>
  );
};

export default App;