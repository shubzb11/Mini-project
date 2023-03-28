window.addEventListener("scroll", function () {
  let navbar = document.getElementById("menu-bar");
  if (window.pageYOffset >= 190) {
    navbar.classList.add("stiky");
  } else {
    navbar.classList.remove("stiky");
  }
});
