var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
  css.textContent = body.style.background + ";";
};

function randomHexNumber() {
  return Math.floor(Math.random() * (16777215 - 1) + 1).toString(16);
};
 
function setRandomColors() {
  color1.value = "#" + randomHexNumber();
  color2.value = "#" + randomHexNumber();
  setGradient();
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColors);
window.addEventListener("load", setRandomColors);