import React, { useState } from 'react';
import Weather from './components/Weather';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add a loading state

  // Replace with your new API key directly
  const apiKey = 'bb9233089966f77d8c1a686ada7687b3'; // REMOVE THIS IN PRODUCTION!
  console.log("API Key:", apiKey); // **DEBUGGING: Check your API key. REMOVE THIS LINE IN PROD**
  const apiURL = 'https://api.openweathermap.org/data/2.5/weather';

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true); // Set loading to true when the search starts
    try {
      const apiUrlWithParams = `${apiURL}?q=${city}&appid=${apiKey}&units=metric`;
      console.log("API Request URL:", apiUrlWithParams);

      const response = await axios.get(apiUrlWithParams);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setWeatherData(null);
      setError('City not found. Please try again.');
      if (err.response) {
        console.log("OpenWeatherMap API Error Response:", err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log("Request Error (No Response):", err.request);
      } else {
        console.log('General Error:', err.message);
      }
    } finally {
      setLoading(false); // Set loading to false when the search finishes (success or error)
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {loading && <p>Loading...</p>} {/* Conditionally render loading message */}
      {error && <p className="error-message">{error}</p>}
      {weatherData && !loading && <Weather data={weatherData} />}
    </div>
  );
};

export default App;