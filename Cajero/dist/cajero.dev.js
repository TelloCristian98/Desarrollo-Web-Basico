"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Billete = function Billete(valor, cantidad) {
  _classCallCheck(this, Billete);

  this.valor = valor;
  this.cantidad = cantidad;
};

function entregarDinero() {
  var dinero_in = document.getElementById("dinero");
  dinero = parseInt(dinero_in.value);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = caja[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var billetes = _step.value;

      if (dinero > 0) {
        div = Math.floor(dinero / billetes.valor);

        if (div > billetes.cantidad) {
          papeles = billetes.cantidad;
        } else {
          papeles = div;
        }

        entregado.push(new Billete(billetes.valor, papeles));
        dinero = dinero - billetes.valor * papeles;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (dinero > 0) {
    resultado.innerHTML = "Cajero pobre :( ";
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = entregado[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var e = _step2.value;

        if (e.cantidad > 0) {
          resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
}

var entregado = [];
var caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);