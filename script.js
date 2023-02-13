// fetch weather data
const currentLocation = document.querySelector('.current-location')
const currentTemp = document.querySelector('.current-temperature');
const maxTemp = document.querySelector('.max-temp');
const minTemp = document.querySelector('.min-temp');
const windSpeed = document.querySelector('.wind');
const windDirection = document.querySelector('.wind-direction');
const rainFall = document.querySelector('.rain');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const time = document.querySelector('.current-time');
const currentDateElement = document.querySelector('.current-date');

//get current time and date

let date = new Date();
console.log(date);
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

const currentDate = `${day}/${month}/${year}`;
const currentTime = `${hours}:${minutes}`
currentDateElement.innerHTML = currentDate
time.innerHTML = currentTime;


const weatherData = fetch ('https://api.open-meteo.com/v1/dwd-icon?latitude=-33.87&longitude=151.21&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max&current_weather=true&timeformat=unixtime&timezone=Australia%2FSydney')
.then(response => response.json()) // return JSON 
.then(data => { // return json data
    console.log(data);
    
    let locationData = data.timezone;
    let sydney = locationData.replace("Australia/","")
    console.log(sydney);
    currentLocation.innerHTML = sydney
    
    

    let temperature = data.current_weather.temperature;
    currentTemp.innerHTML = `${temperature} &deg;C`;

    let wind = data.current_weather.windspeed;
    windSpeed.innerHTML = `${wind} km/hr`;

    let direction = data.current_weather.winddirection;
    windDirection.innerHTML = direction;
    
    let maxTemperature = data.daily.temperature_2m_max[0];
    maxTemp.innerHTML = `${maxTemperature} &deg;C`
    
    let minTemperature = data.daily.temperature_2m_min[0];
    minTemp.innerHTML = `${minTemperature} &deg;C`

    let rain = data.daily.rain_sum[0];
    rainFall.innerHTML = `${rain} mm`
    
    let sunriseData = data.daily.sunrise[1];
    sunrise.innerHTML = convertToTime(sunriseData);
        
    let sunsetData = data.daily.sunset[0];
    sunset.innerHTML = convertToTime(sunsetData);

})

//function to convert Unix time to AEDT
function convertToTime(unixTime) {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}





























    // const temp = document.querySelector('.temp')
    // const wind = document.querySelector('.wind')
    // const time = document.querySelector('.time')
    // const requestWeather = fetch('https://api.open-meteo.com/v1/forecast?latitude=-33.86&longitude=151.21&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    // .then(response => response.json()) // return json data
    // // return the json data to store in the data variable
    // .then(data => {
    //     console.log(data);
    //     // navigate through the API objects  i.e data. current_weather.temperature and assign the value to a variable. 
    //     let temperature = data.current_weather.temperature
    //     let windSpeed = data.current_weather.windspeed
    //     let hourly = data.hourly.time
    //     console.log(temperature); 
    //     console.log(windSpeed);
        
    //     // set the value to the innerHTML element
    //     wind.innerHTML = windSpeed
    //     temp.innerHTML = temperature
    //     time.innerHTML = hourly
    

    // })
