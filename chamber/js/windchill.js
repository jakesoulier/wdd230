


const temp = 40;
const windSpeed = 5;
// let chill;
if ((temp <= 50) && (windSpeed > 3 )) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));
    // console.log(chill)
    document.getElementById('windChill').innerText = chill
    
} else {
    let chill = 'N/A';
    document.getElementById('windChill').innerText = chill
}
document.getElementById('temp').innerText = temp
document.getElementById('windSpeed').innerText = windSpeed
// console.log(chill)
