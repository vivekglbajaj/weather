const apikey = "7dc41471f2e0bc8dbe87421e6b557cc1";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const  searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const  weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(baseURL + city + `&appid=${apikey}`);

   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display ="none";

   }else   {

    
    var data = await response.json();




document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
if(data.weather[0].main == "clouds"){
    weatherIcon.src ="cloudy.png";
}
else if(data.weather[0].main == "Clear"){
weatherIcon.src = "sun.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png";
}
else if(data.weather[0].main== "Mist"){
    weatherIcon.style.display = "fog.png";
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display == "none";
}
   

}


searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});



