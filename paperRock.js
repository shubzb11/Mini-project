const message = document.querySelector(".message");
const details = document.querySelector(".details");

const buttons = document.querySelectorAll("button");

const selection = ["Rock", "Paper", "Scissors"];
let score = [0, 0];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", guessSelection);
}

function guessSelection(e) {
  let playerGuess = e.target.innerText;
  let computerGuess = Math.floor(Math.random() * 3);

  let computerSelection = selection[computerGuess];

  let output;

  if (playerGuess === "Rock" && computerSelection === "Paper") {
    output = "COMPUTER WINS";
    score[1]++;
  } else if (playerGuess === "Paper" && computerSelection === "Scissors") {
    output = "COMPUTER WINS";
    score[1]++;
  } else if (playerGuess === "Scissors" && computerSelection === "Rock") {
    output = "COMPUTER WINS";
    score[1]++;
  } else if (playerGuess === computerSelection) {
    output = "DRAW";
  } else {
    output = "player wins";
    score[0]++;
  }

  message.innerHTML = ` ${output} player ${score[0]} computer ${score[1]}`;
  message.style.color = "#eb344f";
  message.style.textAlign = "center";
  message.style.marginTop = "20px";

  // details.style.color="#10a7b5";
  // details.style.textAlign='center';
  // details.style.marginTop='20px';
}
