var cel = document.getElementById("cel");
var farh = document.getElementById("farh");
cel.addEventListener("input", function () {
  let c = this.value;
  let f = (c * 9) / 5 + 32;
  farh.value = f;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  farh.value = f;
});
farh.addEventListener("input", function () {
  let f = this.value;
  let c = ((f - 32) * 5) / 9;
  cel.value = c;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  cel.value = c;
});
