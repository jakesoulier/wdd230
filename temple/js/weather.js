const LAT = '-34.9333'
const LON ='138.6'
const API = 'd97f7ea84ceafa5bad6934e0754aa390'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API}&units=imperial`;
const LATbris = '-27.4679'
const LONbris ='153.0281'
const APIbris = 'd97f7ea84ceafa5bad6934e0754aa390'
const apiURLbris = `https://api.openweathermap.org/data/2.5/weather?lat=${LATbris}&lon=${LONbris}&appid=${APIbris}&units=imperial`;
const LATsyd = '-33.7827'
const LONsyd ='151.0489'
const APIsyd = 'd97f7ea84ceafa5bad6934e0754aa390'
const apiURLsyd = `https://api.openweathermap.org/data/2.5/weather?lat=${LATsyd}&lon=${LONsyd}&appid=${APIsyd}&units=imperial`;
const LATmel = '-37.814'
const LONmel ='144.9633'
const APImel = 'd97f7ea84ceafa5bad6934e0754aa390'
const apiURLmel = `https://api.openweathermap.org/data/2.5/weather?lat=${LATmel}&lon=${LONmel}&appid=${APImel}&units=imperial`;
const LATper = '-31.9333'
const LONper ='115.8333'
const APIper = 'd97f7ea84ceafa5bad6934e0754aa390'
const apiURLper = `https://api.openweathermap.org/data/2.5/weather?lat=${LATper}&lon=${LONper}&appid=${APIper}&units=imperial`;


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



function brisWeather(obj) {
    let currentTemp = document.getElementById('brisbane-temp');
    let weatherIcon = document.getElementById('brisbaneIcon');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
    currentTemp.textContent = obj.main.temp;
    weatherIcon.setAttribute('src', iconURL);
    weatherIcon.setAttribute('alt', obj.weather[0].description);
}

fetch(apiURLbris)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    brisWeather(jsObject);
});
  
function sydWeather(obj) {
  let currentTemp = document.getElementById('syd-temp');
  let weatherIcon = document.getElementById('syd-Icon');
  const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
  currentTemp.textContent = obj.main.temp;
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', obj.weather[0].description);
}

fetch(apiURLsyd)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  sydWeather(jsObject);
});

function melWeather(obj) {
  let currentTemp = document.getElementById('mel-temp');
  let weatherIcon = document.getElementById('mel-Icon');
  const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
  currentTemp.textContent = obj.main.temp;
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', obj.weather[0].description);
}

fetch(apiURLmel)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  melWeather(jsObject);
});


function perWeather(obj) {
  let currentTemp = document.getElementById('per-temp');
  let weatherIcon = document.getElementById('per-Icon');
  const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
  currentTemp.textContent = obj.main.temp;
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', obj.weather[0].description);
}

fetch(apiURLper)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  perWeather(jsObject);
});


