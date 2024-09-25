# Weather-App

#### Overview

The Weather App is a simple web application that allows users to search for weather information based on a city name. The app retrieves real-time weather data and displays it on the user interface, including temperature, description, humidity, and wind speed.

## Key Features:

### 1. HTML Structure:

The HTML structure of the app contains a search bar for user input, a weather-box that displays the weather information, and a weather-details section showing additional details like humidity and wind speed.

```HTML
<div class="search">
    <i class="bx bxs-map"></i>
    <input type="text" placeholder="Enter city name" spellcheck="false">
    <button class='bx bx-search-alt'></button>
</div>
<div class="weather-box">
    <img src="">
    <p class="temperature"></p>
    <p class="description"></p>
</div>
<div class="weather-details">
    <div class="humidity">
        <i class="bx bx-water"></i>
        <div class="text">
            <span></span>
            <p> Humidity</p>
        </div>
    </div>
    <div class="wind">
        <i class="bx bx-wind"></i>
        <div class="text">
            <span></span>
            <p> Wind Speed</p>
        </div>
    </div>
</div>
```

### 2. User Input and Error Handling:

The app allows users to input a city name to search for weather information. If an invalid city is entered, an error message with a “404” image and an alert is displayed.

```HTML
<div class="not-found">
    <img src="./404-error.png">
    <p>Oops! Invalid location</p>
</div>
```

### CSS Styling

The CSS for the Weather App is designed to create a **clean**, **modern**, and **responsive** user interface. The styles focus on simplicity, ensuring the app is visually appealing across different screen sizes. The key elements are styled to enhance user interaction and make the weather data easily readable.

#### Key Features:
- **Global Reset**: Basic CSS reset is applied to remove default browser padding, margin, and borders for consistency across devices.
  
- **Responsive Design**: Flexbox is used to center the main card element both vertically and horizontally, ensuring that the app is well-positioned on any screen size.
  
- **Card Layout**: The weather information is displayed inside a visually appealing card with a gradient background, rounded corners, and smooth transition effects to enhance the user experience.
  
- **Search Bar**: The search bar is styled to be prominent, allowing users to input city names with a clean and clear design. The search button changes color when hovered over to indicate interactivity.
  
- **Weather Information**: Weather details such as temperature, humidity, and wind speed are displayed using large, bold text for emphasis, with corresponding icons for clarity. The app also handles error states gracefully with an error message and image for invalid locations.
  
- **Animations**: Subtle animations, such as the **fade-in** effect, are used to enhance the overall experience when displaying weather data and error messages, adding a touch of interactivity.

Below is a preview of some key styles:

```css
/* Global Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Card Layout */
.card {
    position: relative;
    width: 400px;
    background: linear-gradient(135deg, #00feba, #fff);
    border-radius: 18px;
    padding: 28px 32px;
    font-family: 'Roboto', sans-serif;
    transition: 0.6s ease-out;
}

/* Search Button */
.search button:hover {
    color: #fff;
    background: #06283d;
}
```
The full CSS file for styling the Weather App is available [here](./styles.css).


## JavaScript Functionality

The JavaScript for the Weather App is responsible for handling user interactions, fetching data from the OpenWeatherMap API, and dynamically updating the user interface. The code ensures that users receive real-time weather data based on their city input.

#### Key Features:
- **DOM Manipulation**: Various elements like the search bar, weather box, and error message are selected and updated using JavaScript to reflect the user's input and the fetched data.

- **API Request**: The app makes a GET request to the OpenWeatherMap API to retrieve weather data based on the city entered by the user. The API returns information such as temperature, weather conditions, humidity, and wind speed.

- **Search Functionality**: 
  - The app listens for a click event on the search button.
  - When the button is clicked, the city name is extracted from the input field.
  - If the input is empty, the function stops execution to prevent unnecessary API requests.

- **Error Handling**: 
  - If the API responds with a `404` status (indicating the city was not found), an error message is displayed.
  - The weather information box is hidden, and a "city not found" message is shown with a fade-in animation.

- **Weather Data Display**: 
  - Once valid data is received, the app updates the UI with weather information such as:
    - **Temperature**: Displayed in large, bold text.
    - **Weather Description**: A short description (e.g., "clear sky") of the current weather.
    - **Humidity and Wind Speed**: These details are shown in dedicated sections, with corresponding icons for better visual representation.

- **Dynamic Weather Icons**: The weather condition (e.g., Clear, Rain, Clouds) is used to dynamically load and display the appropriate weather icon in the UI.

- **UI Transitions and Animations**: Smooth transitions are applied to the card and weather elements. The fade-in animation is used when new data is loaded or when an error is displayed.

Here is a preview of the JavaScript:
```JS
// Update the weather box with the appropriate data.
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            // Using a switch statement to choose the right weather icon based on the weather condition.
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'weather images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'weather images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'weather images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'weather images/cloudy.png';
                    break;
                case 'Haze':
                    image.src = 'weather images/haze.png';
                    break;
                case 'Thunder':
                    image.src = 'weather images/thunder.png';
                    break;
                default:
                    image.src = ''; // Default case if no condition matches
            }
```
The full JavaScript file for the Weather App, which handles user interactions and API requests, is available [here](index.js).

## Final Images

These images showcase the completed Weather App interface, highlighting the user experience and interaction with weather data. The first image illustrates the search functionality and weather details presentation, while the second image demonstrates the error handling when an invalid location is entered. Together, these visual elements convey the app’s functionality, design aesthetic, and responsiveness, enhancing the overall user experience.

<img src="https://github.com/user-attachments/assets/e8e551da-fe8e-4cff-8201-b9a971c41b78" alt="Weather App Interface" width="400" />
<img src="https://github.com/user-attachments/assets/7917da64-4a2a-4744-a677-e1a223c2bd28" alt="Weather App Error Handling" width="400" />


