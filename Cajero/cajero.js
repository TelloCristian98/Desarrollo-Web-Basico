class Billete{
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;        
    }
}

function entregarDinero() {
    var dinero_in = document.getElementById("dinero");
    dinero = parseInt(dinero_in.value);
    for(var billetes of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / billetes.valor);
            if(div > billetes.cantidad){
                papeles = billetes.cantidad;                                                    
            } else {
                papeles = div;
            }

            entregado.push( new Billete(billetes.valor, papeles) );
            dinero = dinero - (billetes.valor * papeles);
        }
    }

    if (dinero > 0) {
        resultado.innerHTML = "Cajero pobre :( ";
    }else{
        for(var e of entregado){
            if (e.cantidad > 0) {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";            
            }            
        }
    }
}


var entregado = [];
var caja = [];
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 2) );

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);