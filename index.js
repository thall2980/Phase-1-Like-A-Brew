const beerParent = document.querySelector("#beer-list-parent");
let beerData = [];

fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then((data) => {
    beerData = data;
    handleFilter(data);
    beerData.forEach(renderBeers);
    beerData.forEach(sortBeer);
  });

function handleFilter(beers) {
  let value = 1000;
  const smallButton = document.querySelector("#small");
  const mediumButton = document.querySelector("#medium");
  const largeButton = document.querySelector("#large");
  smallButton.addEventListener("click", () => {
    value = 5;
    console.log(value);
    const filterArray = beers.filter((beer) => {
      return beer.abv < value;
    });
    getData(filterArray);
  });
  mediumButton.addEventListener("click", () => {
    value = 10;
    console.log(value);
    const filterArray = beers.filter((beer) => {
      return beer.abv < value && beer.abv >= 5;
    });
    getData(filterArray);
  });
  largeButton.addEventListener("click", () => {
    console.log(value);
    const filterArray = beers.filter((beer) => {
      return beer.abv > 10;
    });
    getData(filterArray);
  });
}

function getData(filterData) {
  console.log(filterData);
}

function renderBeers(data) {
  const beerList = document.querySelector("#beer-list");
  beerContainer = document.createElement("div");
  beerList.append(beerContainer);


  beerName = document.createElement("h1");
  beerName.className = "";
  beerContainer.append(beerName);
  beerName.textContent = data.name;

  beerImage = document.createElement("img");
  beerImage.className = "image";
  beerContainer.append(beerImage);
  beerImage.src = data.image_url;

  beerABV = document.createElement("h2");
  beerContainer.append(beerABV);
  beerABV.textContent = data.abv;

  beerDescription = document.createElement("h3");
  beerContainer.append(beerDescription);
  beerDescription.textContent = data.description;

  likeContainer = document.createElement("div");
  beerContainer.append(likeContainer);
  likeImage = document.createElement("img");
  likeImage.src =
    "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png";
  likeButton = document.createElement("btn");
  likeButton.textContent = "LIKE";
  let likeCounter = document.createElement("h3");
  likeCounter.textContent = "0";
  likeContainer.append(likeImage, likeButton, likeCounter);

  likeButton.addEventListener("click", () => {
    likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
  });

  dislikeContainer = document.createElement("div");
  beerContainer.append(dislikeContainer);
  dislikeImage = document.createElement("img");
  dislikeImage.src =
    "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-down.png";
  dislikeButton = document.createElement("btn");
  dislikeButton.textContent = "DISLIKE";
  let dislikeCounter = document.createElement("h3");
  dislikeCounter.textContent = "0";
  dislikeContainer.append(dislikeImage, dislikeButton, dislikeCounter);

  dislikeButton.addEventListener("click", () => {
    dislikeCounter.textContent = parseInt(dislikeCounter.textContent) + 1;
  });

}

function sortBeer(data) {
  if (data.abv < 4.9) {
    const newBeerList = document.querySelector("#new-beer-list");
    beerContainer = document.createElement("div");
    newBeerList.append(beerContainer);
    beerName = document.createElement("h1");
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

    likeContainer = document.createElement("div");
    beerContainer.append(likeContainer);
    likeImage = document.createElement("img");
    likeImage.src =
      "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png";
    likeButton = document.createElement("btn");
    likeButton.textContent = "LIKE";
    let likeCounter = document.createElement("h3");
    likeCounter.textContent = "0";
    likeContainer.append(likeImage, likeButton, likeCounter);

    likeButton.addEventListener("click", () => {
      likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
    });

    dislikeContainer = document.createElement("div");
    beerContainer.append(dislikeContainer);
    dislikeImage = document.createElement("img");
    dislikeImage.src =
      "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-down.png";
    dislikeButton = document.createElement("btn");
    dislikeButton.textContent = "DISLIKE";
    let dislikeCounter = document.createElement("h3");
    dislikeCounter.textContent = "0";
    dislikeContainer.append(dislikeImage, dislikeButton, dislikeCounter);

    dislikeButton.addEventListener("click", () => {
      dislikeCounter.textContent = parseInt(dislikeCounter.textContent) + 1;
    });

    const lowestABV = document.querySelector("#lowest");
    lowestABV.addEventListener("click", () => {
      const beerParent = document.querySelector("#beer-list-parent");
      beerParent.removeChild(beerParent.firstElementChild);
      beerParent.appendChild(newBeerList);
    });
  }
}


