// API Request:
const request = fetch('https://restcountries.com/v2/all') // countries api
    .then(response => response.json()) // accessing the api data as JSON
    .then(data => { // storing the JSON into a data variable
        console.log(data);
        
    })
    

