var dataname = document.getElementById("nameperson");
var name2 = prompt("Hi ! What is your Name?");
function name1() {
  // document.getElementsByTagName('h1')[0].style.color="navajowhite";
  // document.getElementsByTagName('h1')[0].style.color="red";

  document.getElementsByTagName("h1")[0].innerHTML =
    name2 + "<br>" + "Do you want to find your year of birth?";
}
name1();
function calculate() {
  var number = document.getElementById("number").value;
  if (number == " " || number == 0) {
    alert("Please type a valid age!!");
  }
  var date = new Date().getFullYear();
  var birthYear = date - number;
  document.getElementById("year").innerHTML = "Year Born:" + birthYear;
  document.getElementById("year").style.color = "black";
}
document.getElementById("button").onclick = function () {
  dataname.innerText = `${name2}`;
  dataname.style.color = "#F4B0A9";
  dataname.style.fontSize = "30px";
  dataname.style.textAlign = "center";

  calculate();
};
