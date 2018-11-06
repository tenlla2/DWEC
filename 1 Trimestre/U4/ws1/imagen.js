function iniciar() {
    document.getElementById("imagen").addEventListener("mousedown", clickada);
    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", soltar);
}
function clickada() {
    clickSobreImagen = true;
}
function soltar() {
    clickSobreImagen = false;
}
function mover(event) {
    var objetoImagen = document.getElementById("imagen");
    var x = window.event.clientX;
    var y = window.event.clientY;
    if (clickSobreImagen) {
        objetoImagen.vspace = y;
        objetoImagen.hspace = x;
    }
}