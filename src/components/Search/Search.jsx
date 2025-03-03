import React from "react";
import { fetchWeather } from "../../services/WeatherService";
import "./Search.css";

let initialSearch = false;

const Search = ({ city, setCity, setForecast, setError, error }) => {
    const handleSearch = async () => {
        try {
            setError(null);
            const data = await fetchWeather(city);
            setForecast(data.list.filter((_, index) => index % 8 === 0));
        } catch (err) {
            setError(err.message);
        }
    };

    if (!initialSearch) {
        initialSearch = true;
        handleSearch();
    }

    return (
        <div id="searchArea">
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Search;