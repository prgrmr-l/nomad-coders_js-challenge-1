const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = document.querySelector("h2");

superEventHandler.style.color = colors[0];

function mouseEnter() {
  superEventHandler.innerText = "Hi";
  superEventHandler.style.color = colors[1];
}

function mouseOut() {
  superEventHandler.innerText = "Hello";
  superEventHandler.style.color = colors[2];
}

function reSize() {
  superEventHandler.innerText = "Hola";
  superEventHandler.style.color = colors[3];
}

function contextMenu() {
  superEventHandler.innerText = "Hola!!!";
  superEventHandler.style.color = colors[4];
}

superEventHandler.addEventListener("mouseenter", mouseEnter);
superEventHandler.addEventListener("mouseout", mouseOut);
window.addEventListener("resize", reSize);
superEventHandler.addEventListener("contextmenu", contextMenu);
