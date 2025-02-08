# React Weather App

A simple React weather application that fetches weather data from the OpenWeatherMap API and displays it to the user.

## Features

*   **City Search:** Allows users to enter a city name and retrieve the current weather information.
*   **Weather Display:** Shows temperature, description, humidity, and an icon representing the weather condition.
*   **Loading Indicator:** Displays a loading message while fetching data from the API.
*   **Error Handling:** Provides informative error messages for invalid city names or API issues.
*   **Responsive Design:** Adapts to different screen sizes for a better user experience on desktop, tablet, and mobile devices.
*   **Interactive Map:** Displays a map centered on the selected city using Leaflet and OpenCageData.
*   **Animations:** Uses CSS transitions for smoother user interactions.

## Technologies Used

*   React
*   Axios (for API requests)
*   OpenWeatherMap API (for weather data)
*   OpenCageData API (for geocoding)
*   Leaflet and React Leaflet (for interactive maps)
*   CSS Media Queries (for responsive design)

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure API Keys:**

    *   **OpenWeatherMap API:**
        *   Sign up for a free account at [https://openweathermap.org/](https://openweathermap.org/).
        *   Obtain your API key from your OpenWeatherMap account.
        *   Replace the value of `apiKey` in `src/App.js` with your API key.  **Note:** For a production app, it's better to store the API key in a `.env` file.
    *   **OpenCageData API:**
        *   Sign up for a free account at [https://opencagedata.com/](https://opencagedata.com/).
        *   Obtain your API key from your OpenCageData account.
        *   Replace the value of `geocodingApiUrl` in `src/components/Map.js` with your API key.

4.  **Start the development server:**

    ```bash
    npm start
    ```

    This will start the React development server and open the app in your browser (usually at `http://localhost:3000`).

## API Keys

This app requires API keys for OpenWeatherMap and OpenCageData. These keys are used to authenticate your requests to the respective APIs.  For security, you should store these keys as environment variables or use a secrets management solution in a production environment.  **Do not commit your API keys directly to your repository.**

## Important Notes

*   This app is a basic example and may require further development for production use.
*   The OpenWeatherMap and OpenCageData APIs have usage limits. Be sure to check their documentation for details.
*   The Geolocation API requires the user's permission to access their location.
*   Ensure you keep your API keys secure and do not expose them in your client-side code.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

[Specify the License, e.g., MIT License]

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
