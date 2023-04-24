const btn = document.querySelector("#searchBtn");
const inputBox = document.querySelector(".input-box");
const temp = document.querySelector('.temperature');
const desc = document.querySelector('.description');
const wind = document.querySelector('#wind-speed');
const hum = document.querySelector('#humidity');
const weather_img = document.querySelector('.weather-img');
const displayCityName = document.querySelector(".cityname")

let getWeatherData = async () => {
    let city = inputBox.value == "" ? "mumbai" : inputBox.value;
    document.body.style.backgroundImage = `url('https://source.unsplash.com/720x480/?${city}')`;
    const APIKEY = "bd11580b82061ff1b859705d90da7690";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    let jsonData = await fetch(URL);
    let weatherData = await jsonData.json();

    let Temperature = Math.round(weatherData.main.temp);
    let Humidity = Math.round(weatherData.main.humidity);
    let Windspeed = Math.round(weatherData.main.temp);
    let Description = weatherData.weather[0].description;
    let Weather = weatherData.weather[0].main

    temp.innerHTML = `${Temperature} °C`
    wind.innerHTML = `${Windspeed} KM/h`
    hum.innerHTML = `${Humidity} %`
    desc.innerHTML = Description
    displayCityName.innerHTML = city

    switch (Weather) {
        case "Haze":
            weather_img.src = "./images/haze.png"
            break;
        case "Clear":
            weather_img.src = "./images/clear-sky.png"
            break;
        case "Clouds":
            weather_img.src = "./images/broken-clouds.png"
            break;
        case "Rain":
            weather_img.src = "./images/rain.png"
            break;
        case "Snow":
            weather_img.src = "./images/snow.png"
            break;
        case "Mist":
            weather_img.src = "./images/mist.png"
            break;
        case "Thunderstorm":
            weather_img.src = "./images/thunderstorm.png"
            break;
        case "Drizzle":
            weather_img.src = "./images/snow.png"
            break;
        default:
            weather_img.src = "./images/loading-dot.gif"
            break;
    }
    console.log(weatherData)
    // console.log(Temperature)
    // console.log(Windspeed)
    // console.log(Humidity)
    // console.log(Description)
    // console.log(Weather)
}

getWeatherData()

btn.addEventListener("click", getWeatherData)

window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        
        getWeatherData()
        if (inputBox.value != "") {
            inputBox.value = "";
        }
    }
});