var villa = document.getElementById("villa");
var papel = villa.getContext("2d");
document.addEventListener("keydown", moverPollo);
var x_pollo = 150;
var y_pollo = 150;

var fondo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/tile.png",
    cargaOK: false
};

var vaca = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/vaca.png",
    cargaOK: false
};

var pollo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/pollo.png",
    cargaOK: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);


function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.objeto, 0, 0);
    }
    if (vaca.cargaOK) {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(vaca.objeto, x, y);
    }
    if (pollo.cargaOK) {
        papel.drawImage(pollo.objeto, x_pollo, y_pollo);
    }
}

function moverPollo(evento){    
    var movimiento = 50;
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };
    
    switch (evento.keyCode) {
        case teclas.UP:
            if (y_pollo > 0) {
                y_pollo -= movimiento;  
                dibujar();
            }
            break;
        case teclas.DOWN:
            if (y_pollo < 450) {
                y_pollo += movimiento;
                dibujar();                               
            }            
            break;
        case teclas.LEFT:
            if (x_pollo > 0) {
                x_pollo -= movimiento;
                dibujar();                               
            } 
            break;
        case teclas.RIGHT:
            if (x_pollo < 450) {
                x_pollo += movimiento;
                dibujar();                               
            }
            break;
        default:            
            break;
    }
}


function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}

function aleatorio(min, max) {
    var resultado = Math.floor(Math.random() * (max - min + 1)) + min;    
    return resultado;
}

