const API_key = 'cab8e12454cc911bd2fc51714a0dafa1'
const cityInput = document.querySelector(".city")
const stateInput = document.querySelector(".state")
const countryCode = "us"
const weatherForm = document.querySelector("#weatherForm")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${stateInput},${countryCode}&appid=${API_key}&units=imperial`)
.then((resp)=> resp.json())
.then((data)=> {
    console.log(data)

fetch(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
.then((response)=> response.blob())
.then((result)=>{ 

        document.getElementById("text_location").innerHTML = data.name
        document.getElementById("text_location_country").innerHTML = data.sys.country
        document.getElementById("text_temp").innerHTML = Math.round(data.main.temp)
        document.getElementById("text_feelslike").innerHTML = Math.round(data.main.feels_like)
        document.getElementById("text_desc").innerHTML = data.weather[0].description
    })
})
