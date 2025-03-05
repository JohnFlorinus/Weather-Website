import React, { useState, useEffect } from "react";
import WeatherCard from "./../../components/WeatherCard/WeatherCard";
import CurrentWeatherCard from "../../components/CurrentWeatherCard/CurrentWeatherCard";
import './WeatherContainer.css';
import Search from "./../../components/Search/Search";

const WeatherContainer = () => {
  const [city, setCity] = useState("Stockholm");
  const [searchedCity, setSearchedCity] = useState("Stockholm");
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  return (
      <>
          <Search 
        city={city} 
        setCity={setCity} 
        setForecast={setForecast} 
        setError={setError}
        setSearchedCity={setSearchedCity}
        error={error} 
      />
      {forecast[0] && <CurrentWeatherCard weather={forecast[0]} city={searchedCity} />}
          <div className="forecast-container">
              {forecast.slice(0,-1).map((weather) => (
                  <WeatherCard key={weather.Date} weather={weather} />
              ))}
          </div>
        </>
  );
};

export default WeatherContainer;