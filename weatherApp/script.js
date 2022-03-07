const API_key = 'cab8e12454cc911bd2fc51714a0dafa1'
const cityInput = document.querySelector(".city")
const stateInput = document.querySelector(".state")
const countryCode = "us"
const weatherForm = document.querySelector("#weatherForm")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${stateInput},${countryCode}&appid=${API_key}&units=imperial`)
.then((resp)=> resp.json())
