const apiKey = '03229bd185c64164e6a727244547a4c3'; // Get your API key from the source
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeatherData(location);
    }
});

function fetchWeatherData(location) {
    const url = `${apiURL}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

function showLoading() {
    locationElement.textContent = 'Loading...';
    temperatureElement.textContent = '';
    descriptionElement.textContent = '';
    }
        
function fetchWeatherData(location) {
    showLoading();
    // ... rest of the function
    }
}