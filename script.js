// API Request:

const requestData = fetch('https://restcountries.com/v2/all')
.then(response => response.json()) // returns the response to json
.then(data => console.log(data)) // return the json data


  // create a function that will return the first country of the array and then display it inside the country div
  const country = document.querySelector('.country')
 
    const request = fetch('https://restcountries.com/v2/all')
    .then(response => response.json()) // returns json
    .then(data => data[0]) // returns the data to the first element of the array === afghanistan
    .then(firstCountry => { // this .then method returns the previous value to firstCountry which is then assigned to let afghanistan
        let afghanistan = firstCountry
        console.log(afghanistan);
        // to output the country name inside the element you need to use a string literal 
        country.innerHTML = `${firstCountry.name}` 
    })


// filter all of the countries with stan in their name and output the names inside a div

const countriesStan = document.querySelector('.countries-stan')

const requestCountries = fetch('https://restcountries.com/v2/all')
.then(response => response.json()) // returns the json
.then(data => {
    let filterCountries = data.filter(c => c.name.includes('stan'))
    console.log(filterCountries);
    //display filtered countries inside the div element
    // this is not working because the object is an array so you need to loop through to display all of the countries.
    //use map 
    countriesStan.innerHTML = filterCountries.map(country => country.name).join(' ')
})
    
    
    // fetch weather data
    let currentWeather;
    const temp = document.querySelector('.temp')
    const requestWeather = fetch('https://api.open-meteo.com/v1/forecast?latitude=-33.86&longitude=151.21&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    .then(response => response.json()) // return json data
    // filter out the current temperature
    // get weather temperature
    //return the current_weather data and store in weatherData variable
    .then(data => {
        let weatherData = data.current_weather.temperature
        console.log(weatherData); 
        temp.innerHTML = weatherData 

    })
