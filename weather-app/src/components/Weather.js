import React from 'react';

const Weather = ({ data }) => {
  // **DEBUGGING: Log the data prop**
  console.log("Weather Data:", data); // Check the value of the data prop

  if (!data) {
    return <p>No weather data available.</p>; // Simple message if no data
  }

  const { name, main, weather } = data;
    //Check values are valid before proceeding
    if (!name || !main || !weather || !weather[0] || !weather[0].icon) {
        return <p>Error: Incomplete weather data received.</p>;
    }

  const iconCode = weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div className="Weather">
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