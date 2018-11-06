/*Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.*/

/*Añade las siguientes funcionalidades al ejercicio anterior:
◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
◦ Borrar por completo el canvas (con un botón).*/

window.addEventListener("load", function (event){
    document.write("<table cellspacing='2' aling='center' bgcolor = 'black'>");
    for(var i = 0; i < 10 ; i++){
        document.write("<tr height ='50' aling='center' bgcolor = 'white'>");
        for(var j = 0; j < 10; j++){
            document.write("<td class = 'celda' width = '50'></td>");
        }
        document.write("</td>");
    }
    document.write("</table>");
    
    var celdas = document.getElementsByClassName("celda");
    for(var i = 0; i < celdas.length; i++){
        celdas[i].addEventListener("mouseenter", pintar);
    }
    document.addEventListener("keyup", borrar);
    
});

function pintar(event){
    if(event.ctrlKey){
        event.target.style.background="red";
    }
    if(event.shiftKey){
        event.target.style.background="blue";
    }
    if(event.altKey){
        event.target.style.background="white";
    }
}

function borrar(event){
    if(event.code == "Space"){
        let celdas = document.getElementsByClassName("celda");
        console.log("Espacio pulsado");
        for(var i = 0; i < celdas.length; i++){
            celdas[i].style.background="white";
        }
    }
}
 