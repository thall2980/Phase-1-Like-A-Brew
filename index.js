fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then((data) => data.forEach(renderBeers));

function renderBeers(data) {
  const beerList = document.querySelector("#beer-list");
  beerContainer = document.createElement("div");
  beerList.append(beerContainer);

  beerName = document.createElement("h1");
  beerName.className = "";
  beerContainer.append(beerName);
  beerName.textContent = data.name;

  beerImage = document.createElement("img");
  beerContainer.append(beerImage);
  beerImage.src = data.image_url;

  beerABV = document.createElement("h2");
  beerContainer.append(beerABV);
  beerABV.textContent = data.abv;

  beerDescription = document.createElement("h3");
  beerContainer.append(beerDescription);
  beerDescription.textContent = data.description;
}
