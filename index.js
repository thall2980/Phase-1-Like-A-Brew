const beerParent = document.querySelector("#beer-list-parent");
const smallButton = document.querySelector("#small");
const mediumButton = document.querySelector("#medium");
const largeButton = document.querySelector("#large");
const showAllButton = document.querySelector("#show-all");

fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then((data) => {
    handleFilter(data);
    data.forEach(renderBeers);
  });

function handleFilter(beers) {
  let value;
  smallButton.addEventListener("click", () => {
    value = 5;
    const filterArray = beers.filter((beer) => {
      return beer.abv < value;
    });
    showFilterData(filterArray);
  });
  mediumButton.addEventListener("click", () => {
    value = 10;
    const filterArray = beers.filter((beer) => {
      return beer.abv < value && beer.abv >= 5;
    });
    showFilterData(filterArray);
  });
  largeButton.addEventListener("click", () => {
    const filterArray = beers.filter((beer) => {
      return beer.abv >= 10;
    });
    showFilterData(filterArray);
  });
  showAllButton.addEventListener("click", () => {
    value = 0;
    const filterArray = beers.filter((beer) => {
      return beer.abv > value;
    });
    showFilterData(filterArray);
  });  
}

function showFilterData(data) {
  const newBeerList = document.createElement("ol");
  newBeerList.className = "beer-list";
  data.forEach(updateBeers);
  function updateBeers(data) {
    beerContainer = document.createElement("div");
    beerContainer.className = "beer-container";
    newBeerList.append(beerContainer);
    beerContainerCreation(data);
    beerParent.removeChild(beerParent.firstElementChild);
    beerParent.appendChild(newBeerList);
  }
}

function renderBeers(data) {
  const beerList = document.querySelector("#original-beer-list");
  beerList.className = "beer-list";
  beerContainer = document.createElement("div");
  beerContainer.className = "beer-container";
  beerList.append(beerContainer);

  beerContainerCreation(data);
}

function beerContainerCreation(data) {

  beerImage = document.createElement("img");
  beerImage.className = "image";
  beerContainer.append(beerImage);
  beerImage.src = data.image_url;

  beerName = document.createElement("h1");
  beerName.className = "beer-name";
  beerContainer.append(beerName);
  beerName.textContent = data.name;

  beerDescription = document.createElement("h3");
  beerDescription.className = "beer-description";
  beerContainer.append(beerDescription);
  beerDescription.textContent = data.description;

  beerABV = document.createElement("h2");
  beerABV.className = "beer-ABV";
  beerContainer.append(beerABV);
  beerABV.textContent = data.abv + " ABV ";

  likeContainer = document.createElement("div");
  likeContainer.className = "vote-container";
  beerContainer.append(likeContainer);
  likeImage = document.createElement("img");
  likeImage.className = "vote-image";
  likeImage.src =
    "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png";
  likeButton = document.createElement("button");
  likeButton.className = "vote-button";
  likeButton.textContent = "LIKE";
  let likeCounter = document.createElement("h3");
  likeCounter.textContent = "0";
  likeCounter.className = "vote-counter";
  likeContainer.append(likeImage, likeButton, likeCounter);

  likeButton.addEventListener("click", () => {
    likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
  });

  dislikeContainer = document.createElement("div");
  dislikeContainer.className = "vote-container";
  beerContainer.append(dislikeContainer);
  dislikeImage = document.createElement("img");
  dislikeImage.className = "vote-image";
  dislikeImage.src =
    "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-down.png";
  dislikeButton = document.createElement("button");
  dislikeButton.className = "vote-button";
  dislikeButton.textContent = "DISLIKE";
  let dislikeCounter = document.createElement("h3");
  dislikeCounter.textContent = "0";
  dislikeCounter.className = "vote-counter";
  dislikeContainer.append(dislikeImage, dislikeButton, dislikeCounter);

  dislikeButton.addEventListener("click", () => {
    dislikeCounter.textContent = parseInt(dislikeCounter.textContent) + 1;
  });
}
