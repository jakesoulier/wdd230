const requestURL = "./data/data.json";

fetch(requestURL)       
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const buzlist = jsonObject['businesses'];
    buzlist.forEach(displayCard);
    // buzlist.forEach(displayList);
  });

function displayCard(business) {
    let card = document.querySelector("#cardview");
    let div = document.createElement("div");
    console.log(business.imageURL)
    div.innerHTML = `<img src="${business.imageURL}"/>
    <p>${business.street} ${business.citystatezip}</p>
    <p>${business.phone}</p>
    <p><a href="${business.websiteURL}">${business.websiteURL}</a></p>`;
    console.log(div)
    card.appendChild(div);
}

// function displayList(business){

// }