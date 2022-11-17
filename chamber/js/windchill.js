const LAT = '43.4666'
const LON ='-112.0341'
const API = 'd97f7ea84ceafa5bad6934e0754aa390'

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API}&units=imperial`;

function showWeather(obj) {
    let currentTemp = document.getElementById('temp');
    let weatherIcon = document.getElementById('weatherIcon');
    let weatherCond = document.getElementById('weatherCond');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
    currentTemp.textContent = obj.main.temp;
    weatherIcon.setAttribute('src', iconURL);
    weatherIcon.setAttribute('alt', obj.weather[0].description);
    console.log(capitalizeFirstLetter(obj.weather[0].description)); // Foo
    weatherCond.textContent = capitalizeFirstLetter(obj.weather[0].description);   

    // WIND CHILL
    if ((obj.main.temp <= 50) && (obj.wind.speed > 3 )) {
        let chill = Math.round((35.74 + (0.6215 * obj.main.temp))-(35.75 * Math.pow(obj.wind.speed,0.16)) + (0.4275*obj.main.temp*Math.pow(obj.wind.speed,0.16)));
        // console.log(chill)
        document.getElementById('windChill').innerText = chill
        
    } else {
        let chill = 'N/A';
        document.getElementById('windChill').innerText = chill
    }
    // document.getElementById('temp').innerText = temp
    document.getElementById('windSpeed').innerText = obj.wind.speed;    

}


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

