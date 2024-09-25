// Selecting important DOM elements such as the card, search button, weather box, weather details, and error message.
const card = document.querySelector('.card');
const search = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

// Adding an event listener to the search button, triggering the API call when clicked.
search.addEventListener('click', () => {
    const APIKey = '4c79a1ef6bdaa5eaa4abb6bd783cbf4c'; // Your API key from OpenWeatherMap
    const city = document.querySelector('.search input').value;

    // If the input field is empty, stop the function.
    if (city === '') return;

    // Fetching weather data from the OpenWeatherMap API using the city inputted by the user.
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            // If the API returns a 404 error (city not found), show the error message and hide weather details.
            if (json.cod === '404') {
                card.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fade-in');
                return;
            }

            // Hide the error message if a valid city is found.
            error404.style.display = 'none';
            error404.classList.remove('fade-in');

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

            // Displaying the temperature, description, humidity, and wind speed in the weather box.
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;

            // Making the weather box and weather details visible with fade-in animations.
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fade-in');
            weatherDetails.classList.add('fade-in');
            card.style.height = '590px'; // Expanding the card height to fit the weather data.
        });
});
