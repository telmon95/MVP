const apiKey = '03229bd185c64164e6a727244547a4c3';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const uvIndexElement = document.getElementById('uv-index');
const windElement = document.getElementById('wind');
const precipitationElement = document.getElementById('precipitation');
const weatherIconElement = document.getElementById('weatherIcon');
const errorMessageElement = document.getElementById('error-message');
const defaultLocationButton = document.getElementById('setDefaultButton');

// Icon Mapping for Weather Conditions
const iconMap = {
    Clear: 'wi-day-sunny',
    Clouds: 'wi-cloudy',
    Rain: 'wi-rain',
    Drizzle: 'wi-sprinkle',
    Thunderstorm: 'wi-thunderstorm',
    Snow: 'wi-snow',
    Mist: 'wi-fog',
    Smoke: 'wi-smoke',
    Haze: 'wi-day-haze',
    Dust: 'wi-dust',
    Fog: 'wi-fog',
    Sand: 'wi-sandstorm',
    Ash: 'wi-volcano',
    Squall: 'wi-strong-wind',
    Tornado: 'wi-tornado',
};

// Load weather data on app load
window.addEventListener('load', () => {
    const defaultLocation = localStorage.getItem('defaultLocation');
    if (defaultLocation) {
        fetchWeatherByCity(defaultLocation);
    } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude);
            },
            error => {
                console.error('Error getting location:', error);
                showError('Unable to retrieve your location. Please search manually.');
            }
        );
    } else {
        showError('Geolocation is not supported by your browser.');
    }
});

// Handle search button click
searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        fetchWeatherByCity(location);
    } else {
        showError('Please enter a city name.');
    }
});

// Set default location
defaultLocationButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        localStorage.setItem('defaultLocation', location);
        alert(`Default location set to "${location}".`);
    } else {
        alert('Please enter a city name to set as the default location.');
    }
});

// Fetch weather by city name
function fetchWeatherByCity(location) {
    showLoading();
    const url = `${apiURL}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found.');
            }
            return response.json();
        })
        .then(data => displayWeatherData(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            showError('City not found or unable to fetch weather data.');
        });
}

// Fetch weather by geographic coordinates
function fetchWeatherByCoords(lat, lon) {
    showLoading();
    const url = `${apiURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch weather data for your location.');
            }
            return response.json();
        })
        .then(data => displayWeatherData(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            showError('Unable to fetch weather data for your location.');
        });
}

// Display weather data
function displayWeatherData(data) {
    const weatherCondition = data.weather[0].main;
    locationElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionElement.textContent = data.weather[0].description;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windElement.textContent = `Wind: ${data.wind.speed} m/s`;
    precipitationElement.textContent = data.rain ? `Precipitation: ${data.rain['1h']} mm` : 'Precipitation: None';

    // Set the weather icon dynamically
    weatherIconElement.className = `wi ${iconMap[weatherCondition] || 'wi-na'}`;

    // Note: UV index requires a separate API (not included in the free plan)
    uvIndexElement.textContent = 'UV Index: N/A';
    hideError();
}

// Show loading state
function showLoading() {
    locationElement.textContent = 'Loading...';
    temperatureElement.textContent = '';
    descriptionElement.textContent = '';
    humidityElement.textContent = '';
    uvIndexElement.textContent = '';
    windElement.textContent = '';
    precipitationElement.textContent = '';
    weatherIconElement.className = 'wi wi-na'; // Default empty icon
    errorMessageElement.textContent = ''; // Clear any existing error messages
    errorMessageElement.classList.add('hidden'); // Hide error message
}

// Show error messages
function showError(message) {
    locationElement.textContent = '';
    temperatureElement.textContent = '';
    descriptionElement.textContent = '';
    humidityElement.textContent = '';
    uvIndexElement.textContent = '';
    windElement.textContent = '';
    precipitationElement.textContent = '';
    weatherIconElement.className = 'wi wi-na'; // Default empty icon
    errorMessageElement.textContent = message;
    errorMessageElement.classList.remove('hidden'); // Show error message
}

// Hide error messages
function hideError() {
    errorMessageElement.textContent = '';
    errorMessageElement.classList.add('hidden'); // Hide error message
}
