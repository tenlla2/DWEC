function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

window.onload = function(){
    document.onmousemove = function(e){
        var contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "X: "+e.pageX+ "  Top: "+ e.pageY;
    }
}