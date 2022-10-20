function openMenu(){
    var x = document.getElementById('navbar')
    
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
        // x.style.animation = "growDown 300ms ease-in-out forwards";
      }
    // var figure = document.getElementById('myFigure').id;
    // figure.style.-webkit-transform = "translate(-50%, -50%)";
}
// -webkit-transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
window.addEventListener('load', () => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today = new Date()
  let day = weekday[today.getDay()];
  var month = today.toLocaleString('default', { month: 'long' });
  document.getElementById('year').textContent = today.getFullYear()
  document.getElementById('dateTime').textContent = 'Last updated: ' + document.lastModified
  document.getElementById('headerdate').textContent = day + ', ' + today.getDay() + " " + month + " " + today.getFullYear()
  let dayNum = today.getDay();
  console.log(dayNum)
  let direction = document.querySelector('#monday');
  if ((dayNum == 1) || (dayNum == 2)) {
      direction.style.display = 'block';
      
  } else {
      direction.style.display = 'none';
  }
})