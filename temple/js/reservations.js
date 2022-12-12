console.log('hey boi');
// document.getElementById('queen1').addEventListener('click', null,
//   function() {
//     console.log('it workd')
//     // document.getElementsById('radio1').setAttribute('src', 'myNewImage.jpg');
// });
// // onclick="openMenu()"
function changePic(){ 
    document.getElementById('room').setAttribute('src', 'imgs/queen.jpg');
}
function changeDbQ(){ 
    document.getElementById('room').setAttribute('src', 'imgs/double_queen.jpg');
}
function changeKing(){ 
    document.getElementById('room').setAttribute('src', 'imgs/king.jpg');
}
function changeSuit(){ 
    document.getElementById('room').setAttribute('src', 'imgs/resot.jpg');
}