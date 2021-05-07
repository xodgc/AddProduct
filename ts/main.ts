class VideoGame {
  title: string;
  price: number;
  rating: string;
  isDigitalOnly: boolean;
}

//test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function () {
  let addBtn = <HTMLElement>document.querySelector("input[type=button]");
  addBtn.onclick = addVideoGame;
}


function clearAllErrors() {
    let errSummary = getById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame() {
  console.log("Add video game was called");
  clearAllErrors();
  if (isAllDataValid()) {
    let game = getVideoGame();
    displayGame(game);
  }
}

function getById(id: string) {
  return document.getElementById(id);
}

/**
 * Gets all game data from the form
 * and returns it in a VideoGame object
 */

function getVideoGame(): VideoGame {
  let game = new VideoGame();
  // TODO: populate with data from the form
  let inputTitle = <HTMLInputElement>getById("title");
  game.title = inputTitle.value;

  let priceInput = <HTMLInputElement>getById("price");
  game.price = parseFloat(priceInput.value);

  let ratingInput = <HTMLSelectElement>getById("rating");
  game.rating = ratingInput.value;

  let digitalOnly = <HTMLInputElement>getById("online");
  if (digitalOnly.checked) {
    game.isDigitalOnly = true;
  } 
  else {
    game.isDigitalOnly = false;
  }
  return game;

  // TODO: Return game
}

function displayGame(myGame: VideoGame): void {
  let displayDiv = getById("display");

  let gameHeading = document.createElement("h2");
  gameHeading.innerText = myGame.title;

  let gameInfo = document.createElement("p");
  let gameMediumDisplay = "";
  if (myGame.isDigitalOnly) {
    gameMediumDisplay = "This is a digital only game.";
  } 
  else {
    gameMediumDisplay = "You can come and buy a physical copy!";
  }

  gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs $${myGame.price.toFixed(2)}. ${gameMediumDisplay}`;

  displayDiv.appendChild(gameHeading);

  displayDiv.appendChild(gameInfo);
}

function getInputById(id:string):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}

// Add validation code**************************************************
function isAllDataValid() {
  let isValid = true;

  let title = getInputById("title").value;
  if(title == "") {
      isValid = false;
      addErrorMessage("title is required");
  }

  let price = getInputById("price").value;
  let priceValue = parseFloat(price);
  if(price == "" || isNaN(priceValue)){
      isValid = false;
      addErrorMessage("price is required and must be a number");
  }

  let rating = (<HTMLInputElement>getById("rating")).value;
  if(rating == ""){
    isValid = false;
    addErrorMsgWithCustomClass("you must choose a rating", "rating-error");
  }

  return isValid;
}
function addErrorMessage(errMsg:string) {
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;

    errSummary.appendChild(errItem);
}

function addErrorMsgWithCustomClass(errMsg:string, cssClass:string){
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;

    errSummary.appendChild(errItem);
}

