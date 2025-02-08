import React, { useState, useEffect } from 'react';

const Weather = ({ data }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Set loaded to true after a short delay to trigger the transition
        setTimeout(() => {
            setLoaded(true);
        }, 100); // Adjust the delay as needed
    }, [data]); // Run this effect whenever 'data' changes

    if (!data) {
        return <p>No weather data available.</p>;
    }

    const { name, main, weather } = data;

    if (!name || !main || !weather || !weather[0] || !weather[0].icon) {
        return <p>Error: Incomplete weather data received.</p>;
    }

    const iconCode = weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    return (
        <div className={`Weather ${loaded ? 'loaded' : ''}`}>
            <h2>{name}</h2>
            <img src={iconUrl} alt={weather[0].description} />
            <p>Temperature: {main.temp}°C</p>
            <p>Feels like: {main.feels_like}°C</p>
            <p>Description: {weather[0].description}</p>
            <p>Humidity: {main.humidity}%</p>
        </div>
    );
};

export default Weather;