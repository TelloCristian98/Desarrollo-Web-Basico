"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pakiman =
/*#__PURE__*/
function () {
  function Pakiman(nombre, vida, ataque) {
    _classCallCheck(this, Pakiman);

    this.imagen = new Image();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.imagen.src = imagenes[this.nombre];
  }

  _createClass(Pakiman, [{
    key: "mostrar",
    value: function mostrar() {
      document.body.appendChild(this.imagen);
      document.write("<br/><strong>" + this.nombre + "</strong><br/>");
      document.write("Vida: " + this.vida + "<br/>");
      document.write("Ataque: " + this.ataque + "<hr/>");
    }
  }]);

  return Pakiman;
}();