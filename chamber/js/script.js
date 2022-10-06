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
  const today = new Date()
  document.getElementById('year').textContent = today.getFullYear()
  document.getElementById('dateTime').textContent = 'Last updated: ' + document.lastModified
})