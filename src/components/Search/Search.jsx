import React from "react";
import { fetchWeather } from "../../services/WeatherService";
import { GetAverages } from "../../services/DataExtrapolation";
import "./Search.css";

let initialSearch = false;

const Search = ({ city, setCity, setForecast, setError, error, setSearchedCity }) => {
    const handleSearch = async () => {
        try {
            setError(null);
            const data = await fetchWeather(city);
            const newData = GetAverages(data.list);
            setForecast(newData);
            // Update searchedCity to the current input value when search is triggered
            setSearchedCity(city);
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