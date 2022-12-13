const requestURL = "./data/data.json";
// console.log(requestURL);
fetch(requestURL)       
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const buzlist = jsonObject['Temples'];
    buzlist.forEach(displayMe);
    // buzlist.forEach(displayList);
  });
function displayMe(temple) {
    let card = document.querySelector(".templeList");
    let div = document.createElement('div');
    div.innerHTML = `<p>${temple.temple}</p>
    <img src="${temple.image}" alt="">
    <p>${temple.address}</p>
    <p>${temple.phone}</p>
    <p>Announced: ${temple.announce}</p>
    <p>Groundbreaking: ${temple.groundbreak}</p>
    <p>Temple President: ${temple.president}</p>`;
    card.appendChild(div);
};