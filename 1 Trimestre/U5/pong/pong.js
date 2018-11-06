var pelota = document.getElementById("circulo");
var jugador1 = document.getElementById("jugador1");
var jugador2 = document.getElementById("jugador2");
var body = document.getElementsByTagName('body');

jugador2.setAttribute("x",jugador2.getAttribute("x")-jugador2.getAttribute("width"));

jugador2.posY=parseInt(jugador2.getAttribute("y"));
jugador2.alto=parseInt(jugador2.getAttribute("height"));


window.addEventListener("keydown", function(event){
    if(event.code == "ArrowUp"){
        if(jugador2.posY>0){
            jugador2.setAttribute("y",jugador2.posY-5);
        }
    }
    if(event.code == "ArrowDown"){
        if(jugador2.posY+jugador2.alto<300){
            jugador2.setAttribute("y",posY+5);
        }
    }   
});