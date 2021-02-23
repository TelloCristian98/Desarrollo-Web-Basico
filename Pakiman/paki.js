var imagenes = [];
imagenes["Cauchin"] = "https://static.platzi.com/media/files/clases-y-arrays-en-javascript/vaca.png";
imagenes["Pokacho"] = "https://static.platzi.com/media/files/clases-y-arrays-en-javascript/pollo.png";
imagenes["Tocinauro"] = "https://static.platzi.com/media/files/clases-y-arrays-en-javascript/cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(pakis of coleccion){
    pakis.mostrar();
}