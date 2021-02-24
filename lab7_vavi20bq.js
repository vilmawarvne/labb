var gameBoard;
var previousCard = null;
var previousTarget;
var isClickable = true;
var showStatus = document.querySelector('.status');
var restartButton = document.querySelector('.restart')

function cardClick (event) {
    if (isClickable == false) {
        return;
    }
    var currentTarget = event.target
    console.log(event.target.id)
    var card = gameBoard[currentTarget.id - 1];
    currentTarget.innerText = card;

    if (previousCard == null) {
        previousCard = card;
        previousTarget = currentTarget;
    } else if (previousCard == card) {
        previousCard = null;
        previousTarget = null;
    } else {
        isClickable = false
        setTimeout(function(){
            currentTarget.addEventListener("click", cardClick)
            currentTarget.innerText = ""
            previousTarget.innerText = ""
            isClickable = true
            previousCard = null
            previousTarget = null
        },2000)
       
    }
}

document.querySelectorAll(".card").forEach(card => card.addEventListener("click", cardClick));

function generateBoard () {
    // Generera kort

   var board = [
       "🍕",
       "🍕",
       "🍔",
       "🍔",
       "🍣",
       "🍣",
       "🍟",
       "🍟",
       "🍝",
       "🍝",
       "🥗",
       "🥗",
       "🌭",
       "🌭",
       "🌮",
       "🌮",
   ]

    board.sort(() => 0.5 - Math.random()) 

    return board;
}

function start () {
    gameBoard = generateBoard(); 

}

window.onload = start ();




