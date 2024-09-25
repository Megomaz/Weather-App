const card = document.querySelector('.card');
const search = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = '4c79a1ef6bdaa5eaa4abb6bd783cbf4c';
    const city = document.querySelector('.search input').value;

    if (city === '')
        return;

        
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        if(json.cod ==='404'){
            card.style.height= '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fade-in');
            return;
        }

        error404.style.dsiplay = 'none';
        error404.classList.remove('fade-in');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
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
                image.src = 'weather images/';
                break;

            case 'Thunder':
                image.src = 'weather images/thunder.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display ='';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fade-in');
        weatherDetails.classList.add('fade-in');
        card.style.height = '590px';
    });

    
});