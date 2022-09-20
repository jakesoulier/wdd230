// const date = new Date()
// date.getTime()
// // console.log(date)
// document.getElementById('dateTime').innerHTML = date;
var string = document.lastModified;
console.log(string)
var update = 'Last updated: ' + string
document.getElementById('dateTime').innerHTML = update
var date = new Date();
var year = date.getFullYear()
console.log(year)
document.getElementById('year').innerHTML = year