// src/api.js
import axios from 'axios';

const apiKey = 'bb9233089966f77d8c1a686ada7687b3'; // Replace with your actual API key for testing. Eventually store this as an enviornment variable
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  try {
    const url = `${apiURL}?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    console.log('API Response (Direct):', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error (Direct):', error.response ? error.response.data : error.message);
    return null;
  }
};