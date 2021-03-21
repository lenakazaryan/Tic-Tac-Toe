let player = "x";
let box = document.querySelectorAll(".box");
let playAgain = document.querySelector(".play-again");
let counter = 0;
let game = document.querySelector("#game");

playAgain.addEventListener("click", reload);

function reload() {
  let reload = location.reload();
}

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", changePlayer, {
    once: true,
  });

  function changePlayer() {
    box[i].innerHTML = player;
    if (player === "x") {
      player = "o";
    } else {
      player = "x";
    }
    counter++;

    let isWinner = toShowWinner();

    if (counter === 9 && isWinner === false) {
      alert("The game ended in a draw.");
      playAgain.style.display = "block";
    }
  }
}

let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function toShowWinner() {
  let isWinner = false;
  for (let i = 0; i < winningCombination.length; i++) {
    let currentComb = winningCombination[i];
    let a = currentComb[0],
      b = currentComb[1],
      c = currentComb[2];
    if (
      box[a].innerHTML == "x" &&
      box[b].innerHTML == "x" &&
      box[c].innerHTML == "x"
    ) {
      alert("You Won 'X' !!!");
      box[a].style.color = "yellow";
      box[b].style.color = "yellow";
      box[c].style.color = "yellow";
      box[a].style.transform = "rotate(20deg)";
      box[b].style.transform = "rotate(20deg)";
      box[c].style.transform = "rotate(20deg)";
      playAgain.style.display = "block";
      isWinner = true;
      break;
    } else if (
      box[a].innerHTML == "o" &&
      box[b].innerHTML == "o" &&
      box[c].innerHTML == "o"
    ) {
      alert("You Won 'O' !!!");
      box[a].style.color = "yellow";
      box[b].style.color = "yellow";
      box[c].style.color = "yellow";
      box[a].style.transform = "rotate(20deg)";
      box[b].style.transform = "rotate(20deg)";
      box[c].style.transform = "rotate(20deg)";
      playAgain.style.display = "block";
      isWinner = true;
      break;
    }
  }
  return isWinner;
}
