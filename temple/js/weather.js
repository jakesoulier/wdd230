const LAT = '-34.9333'
const LON ='138.6'
const API = 'd97f7ea84ceafa5bad6934e0754aa390'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API}&units=imperial`;
const LATbris = '-27.4679'
const LONbris ='153.0281'
const APIbris = 'd97f7ea84ceafa5bad6934e0754aa390'
const apiURLbris = `https://api.openweathermap.org/data/2.5/weather?lat=${LATbris}&lon=${LONbris}&appid=${APIbris}&units=imperial`;


function showWeather(obj) {
    let currentTemp = document.getElementById('adelaide-temp');
    let weatherIcon = document.getElementById('adelaideIcon');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
    currentTemp.textContent = obj.main.temp;
    weatherIcon.setAttribute('src', iconURL);
    weatherIcon.setAttribute('alt', obj.weather[0].description);
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
  });



// function brisWeather(obj) {
//     let currentTemp = document.getElementById('brisbane-temp');
//     let weatherIcon = document.getElementById('brisbaneIcon');
//     const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
//     currentTemp.textContent = obj.main.temp;
//     weatherIcon.setAttribute('src', iconURL);
//     weatherIcon.setAttribute('alt', obj.weather[0].description);
// }

// fetch(apiURLbris)
// .then((response) => response.json())
// .then((jsObject) => {
//     console.log(jsObject);
//     brisWeather(jsObject);
// });
  

