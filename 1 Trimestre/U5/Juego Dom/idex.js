import Tablero from "./Juego Dom/puzzle.js";
var t = new Tablero(3,3);
var movimientos = 0;
var cont=1;
//poner imagenes en array

for(var i=0; i<t.columnas;i++){
    for(var j=0; j<filas;j++){
        t.nuevoArray[i][j]="./images/puzz"+cont+".jpg";
        cont++;
    }
}


//Evento mover Keydown
window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if(key==37){
    	e.preventDefault();
        t.mover("izquierda");
    }
    if(key==38){
    	e.preventDefault();
    	t.mover("arriba");
    }
    if(key==39){
    	e.preventDefault();
    	t.mover("derecha");
    }
    if(key==40){
    	e.preventDefault();
    	t.mover("abajo");
    }
    
});