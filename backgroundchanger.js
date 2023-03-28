function changeBG(color) {
  document.body.style.backgroundColor = color;
  let txt = document.getElementsByClassName("text");

  if (color == "#ffffff") {
    for (let ele of txt) {
      ele.style.color = "black";
    }
  } else {
    for (let ele of txt) {
      ele.style.color = "white";
    }
  }
}
