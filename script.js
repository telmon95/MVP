const apiKey = '03229bd185c64164e6a727244547a4c3'; // Your API key
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const errorMessageElement = document.getElementById('error-message');

searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        fetchWeatherData(location);
    } else {
        showError('Please enter a city name.');
    }
});

function fetchWeatherData(location) {
    showLoading();
    const url = `${apiURL}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found.');
            }
            return response.json();
        })
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            hideError();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            showError('City not found or unable to fetch weather data.');
        });
}

function showLoading() {
    locationElement.textContent = 'Loading...';
    temperatureElement.textContent = '';
    descriptionElement.textContent = '';
    errorMessageElement.textContent = ''; // Clear any existing error messages
    errorMessageElement.classList.add('hidden'); // Hide error message
}

function showError(message) {
    locationElement.textContent = '';
    temperatureElement.textContent = '';
    descriptionElement.textContent = '';
    errorMessageElement.textContent = message;
    errorMessageElement.classList.remove('hidden'); // Show error message
}

function hideError() {
    errorMessageElement.textContent = '';
    errorMessageElement.classList.add('hidden'); // Hide error message
}
