let number = 15;

let x = prompt("guess a number?");

if (x < number) {
  alert("you guessed a lower number. guess a bigger number");
} else if (x > number) {
  alert("you guessed a higher number. guess a smaller number");
} else if (x == number) {
  alert("congrats! you guessed it right");
} else {
  alert("enter a valid number");
}
