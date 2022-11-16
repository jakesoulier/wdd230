const requestURL = "./data/data.json";

fetch(requestURL)       
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const buzlist = jsonObject['businesses'];
    buzlist.forEach(displayCard);
    buzlist.forEach(displayList);
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

function displayList(business) {
  let list = document.querySelector('#listview');
  let table = document.createElement('table');
  table.innerHTML = `<tr><th>${business.name}</th>
  <th>${business.street} ${business.citystatezip}</th>
  <th>${business.phone}</th>
  <th><a href="${business.websiteURL}">${business.websiteURL}</a></th></tr>`;
  list.appendChild(table);
}

function hideCard(){
  var cardView = document.querySelector('#cardview');
  // var button = document.querySelector('button');
  if (cardView.style.display === "grid") {
    cardView.style.display = "none";
    // button.style.opacity = "0.5";  
  } else {
    cardView.style.display = "grid";
  }
}

function hideList(){
  var listView = document.querySelector('#listview');
  // var button = document.querySelector('button');
  if (listView.style.display === "grid") {
    listView.style.display = "none";
    // button.style.opacity = "0.5";  
  } else {
    listView.style.display = "grid";
  }
}