"use strict";

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  var color = "brown";
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, papel);
      y -= movimiento;
      break;

    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, papel);
      y += movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y, papel);
      x += movimiento;
      break;

    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y, papel);
      x -= movimiento;
      break;

    default:
      break;
  }
}

document.addEventListener("keydown", dibujarTeclado);
var cuadrado = document.getElementById("area_de_dibujo");
var papel = cuadrado.getContext("2d");
dibujarLinea("brown", 149, 149, 151, 151, papel);
var x = 150;
var y = 150;