const API_key = 'cab8e12454cc911bd2fc51714a0dafa1'
const cityInput = "new york"
// document.querySelector(".city")
const stateInput = "ny"
// document.querySelector(".state")
const countryCode = "us"
const weatherForm = document.querySelector("#weatherForm")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${stateInput},${countryCode}&appid=${API_key}&units=imperial`)
.then((resp)=> resp.json())
.then((data)=> {
    console.log(data)

    document.getElementById("text_location").innerHTML = data.name
    document.getElementById("text_location_country").innerHTML = data.sys.country
    document.getElementById("text_temp").innerHTML = data.main.temp
    document.getElementById("text_feelslike").innerHTML = data.main.feels_like
    document.getElementById("text_desc").innerHTML = data.weather[0].description
})
