fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then((data) => data.forEach(renderBeers));

const beerList = document.querySelector("#beer-list");

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

fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then((data) => data.forEach(sortBeer));

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
