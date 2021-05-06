class VideoGame {
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

//test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function() {
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame() {
    console.log("Add video game was called");

    if(isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

function getById(id:string) {
    return document.getElementById(id);
}

function getVideoGame():VideoGame {
    let game = new VideoGame();
    // TODO: populate with data from the form
    let inputTitle = <HTMLInputElement>getById("title");
    game.title = inputTitle.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let rating = 

    // TODO: Return game
}

function displayGame(myGame:VideoGame):void {
    //TODO: display video game below form
}

// Add validation code**************************************************
function isAllDataValid() {
    return true;
}