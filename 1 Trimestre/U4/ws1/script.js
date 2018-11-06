/*Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón).*/

var imagen = document.getElementById("imagen");
var coordXraton;
var coordYraton;
var difX = 0;
var difY = 0;
imagen.addEventListener("click", function(event){
    coordXraton = event.clientX;
    coordYraton = event.clientY;

    var oX=Number.parseInt(imagen.style.left);
    var oY=Number.parseInt(imagen.style.top);
    
    difX=oX-coordXraton;
    difY=oY-coordYraton;

    imagen.addEventListener("mousemove", mover);
    imagen.addEventListener("click", soltar);
});

function mover(event){
    var coordXActual = difX + event.clientX + "px";
    var coordYActual = difY + event.clientY + "px";
    event.target.style.left = coordXActual;
    event.target.style.top = coordYActual;    
}

function soltar(event){
    imagen.removeEventListener("mousemove", mover);
    imagen.removeEventListener("click", soltar, false);
}