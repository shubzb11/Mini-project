const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");

const buttons = document.querySelectorAll("button");
//  console.log(buttons);

const coinArray = ["Heads", "Tails"];
let score = [0, 0];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}
function tossCoin(e) {
  // console.log(e.target.innerText);

  let playerGuess = e.target.innerText;

  let computerToss = Math.floor(Math.random() * 2);
  console.log(computerToss);
  // console.log(computerToss);

  let computerGuess = coinArray[computerToss];
  // console.log(computerGuess);
  let output;

  if (playerGuess === computerGuess) {
    output = "Player Wins";
    score[0]++;
  } else {
    output = "Computer Wins";
    score[1]++;
  }

  message1.innerHTML =
    output + "<br> Player " + score[0] + " Computer  " + score[1];
  message2.innerHTML = `computer selected --->  ${computerGuess} <br> player selected ---> ${playerGuess}`;

  message1.style.color = "#26873b";
  message1.style.marginBottom = "20px";
}
