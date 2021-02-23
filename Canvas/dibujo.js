var texto = document.getElementById("texto_lineas");
var boton_texto = document.getElementById("boton");
boton_texto.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var l = 0;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var num_lineas = parseInt(texto.value);
    var espacio = ancho / num_lineas;
    while(l < num_lineas){
        dibujarLinea("blue", 0, espacio*l, espacio*(l+1), 300);        
        l += 1;
    }
    if(num_lineas != 0){
        dibujarLinea("blue", 1, 1, 1, 300);
        dibujarLinea("blue", 1, 299, 299, 299);
    }
    
}

