const LAT = "64.8378"
const LON = "-147.7164"
const API = "d97f7ea84ceafa5bad6934e0754aa390"
// const iconid = "10d"
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API}&units=imperial`;
function showWeather(obj) {
    let currentTemp = document.querySelector('#current-temp');
    let iconPath = document.querySelector('#icon-src');
    let weatherIcon = document.querySelector('#weathericon');
    let figureCaption = document.querySelector('figcaption');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
    currentTemp.textContent = obj.main.temp;
    iconPath.textContent = iconURL;
    weatherIcon.setAttribute('src', iconURL);
    weatherIcon.setAttribute('alt', obj.weather[0].description);
    figureCaption.textContent = obj.weather[0].main;
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
  });

// http://openweathermap.org/img/wn/10d@2x.png