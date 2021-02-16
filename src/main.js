/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // console.log(tipoCarta());
  // console.log(numeroCarta());
  let pinta = tipoCarta();
  document.getElementById("numberCard").innerHTML = numeroCarta();
  if (pinta == "&hearts;" || pinta == "&diams;") {
    document.getElementById("tipoCartatop").classList.add("bottomIcon_red");
    document.getElementById("tipoCartabottom").classList.add("topIcon_red");
    document.getElementById("tipoCartatop").innerHTML = pinta;
    document.getElementById("tipoCartabottom").innerHTML = pinta;
  } else {
    document.getElementById("tipoCartatop").classList.add("bottomIcon");
    document.getElementById("tipoCartabottom").classList.add("topIcon");
    document.getElementById("tipoCartatop").innerHTML = pinta;
    document.getElementById("tipoCartabottom").innerHTML = pinta;
  }
};

function tipoCarta() {
  let figura = Math.floor(Math.random() * 4) + 1;
  let cartaFigura = "";
  switch (figura) {
    case 1:
      cartaFigura = "&spades;";
      break;
    case 2:
      cartaFigura = "&clubs;";
      break;
    case 3:
      cartaFigura = "&hearts;";
      break;
    case 4:
      cartaFigura = "&diams;";
      break;
  }
  return cartaFigura;
}

function numeroCarta() {
  let numCarta = Math.floor(Math.random() * 13) + 1;
  let carta = "";
  switch (numCarta) {
    case 11:
      carta = "J";
      break;
    case 12:
      carta = "Q";
      break;
    case 13:
      carta = "K";
      break;
    default:
      carta = numCarta;
  }
  return carta;
}
