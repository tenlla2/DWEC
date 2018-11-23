
arrayNotas= new Array();
var contadorNotas=0;
class nota{
    constructor(titulo,texto){
        this.titulo=titulo;
        this.texto=texto;
        this.fecha=new Date();
    }

}

class contenedorNotas{
    constructor(){
        this.notas=new Array();
    }

    añadir(nota){
        this.notas.push(nota);
    }

    borrar(titulo){
        for(var i=0; i<this.notas.length;i++){
            if(titulo==this.notas[i].titulo){
                this.notas.splice(i,1);
            }
        }
    }
}

function vistaNota(nota){
    contadorNotas++;
    divRaiz=document.createElement("div");
    tituloDiv=document.createElement("h1");
    textoDiv=document.createElement("h2");
    fechaDiv=document.createElement("h3");
    botonEditar=document.createElement("BUTTON");
    botonEditar.setAttribute("class","boton");
    botonEditar.setAttribute("id","boton"+contadorNotas);
    tituloDiv.innerText=nota.titulo;
    textoDiv.innerText=nota.texto;
    fechaDiv.innerText=nota.fecha;
    divRaiz.setAttribute("id",contadorNotas);
    divRaiz.setAttribute("class","Nota");
    divRaiz.setAttribute("style","left:0;top:0;");
    
    
    divRaiz.appendChild(tituloDiv);
    divRaiz.appendChild(textoDiv);
    divRaiz.appendChild(fechaDiv);
    divRaiz.appendChild(botonEditar);
    
    return divRaiz;
}


function main(){
   
        contenedor = new contenedorNotas();
        actual = new nota("Clase","Prueba");
        contenedor.añadir(actual);
        for (var i=0; i<contenedor.notas.length;i++){
            divActual=vistaNota(contenedor.notas[i]);
            document.body.appendChild(divActual);
            editar(divActual);

        }
        
    
}

function añadirNotaFormulario(){
    tit=document.getElementById("titulo").value;
    tex=document.getElementById('texto').value;
    if(tit != "" && tex != ""){
        actual = new nota(tit,tex);
        contenedor.añadir(actual);
        divActual=vistaNota(actual);
        document.body.appendChild(divActual);
        creaMovimiento();
        document.getElementById("titulo").value="";
        document.getElementById("texto").value="";
        editar(divActual);
       
    }
    
}



movimiento=function(div)
{
	// Estas variables obtienen la diferencia en pixels entre el punto del raton
	// pulsado dentro del div y el top y left del elemento. Es para que cuando 
	// realizemos el movimiento, el cursor del raton siempre este en la misma
	// posición dentro del div que mueve.
	difX=0;
	difY=0;
 
	// Creamos el evento en el div para controlar la pulsación sobre el elemento
	// cuando se pulsa sobre el elemento se ejecuta la funcion inicio()
    div.addEventListener('mousedown',inicio,false);
 
	// Iniciamos el arrastre
	function inicio(e)
	{
		// Obtenemos la posición del raton
		var eX=e.pageX;
		var eY=e.pageY;
		// Obtenemos los valores de la posicion left y top del elemento
		var oX=parseInt(div.style.left);
		var oY=parseInt(div.style.top);
		// Calculamos la diferencia entre la posicion del div con la del raton.
		difX=oX-eX;
		difY=oY-eY;
 
		// Cremos los eventos mousemove y mouseup
		document.addEventListener('mousemove',mover,false);
		document.addEventListener('mouseup',soltar,false);
	}
 
	// Movemos el elemento por la pantalla cada vez que se mueve el cursor
	function mover(e)
	{
		var tY=e.pageY+difY+'px';
		var tX=e.pageX+difX+'px';
		div.style.top=tY;
        div.style.left=tX;

	}
 
	// Funcion que se ejecuta el botón del ratón
	function soltar(e)
	{
		// Eliminamos los eventos creados en la funcion inicio
		document.removeEventListener('mousemove',mover,false);
        document.removeEventListener('mouseup',soltar,false);
        if(e.pageY<=100 && e.pageX>=screen.availWidth-100){
            titulo = div.children[0].innerText;
            contenedor.borrar(titulo);
            div.remove();
            actualizaIDDivs();
            contadorNotas=document.body.getElementsByClassName("Nota").length;
            
            
               
        }
    }

    function actualizaIDDivs(){
        for (var i=0; i<document.body.getElementsByClassName("Nota").length;i++){
            document.body.getElementsByClassName("Nota")[i].id=i+1;
        }
    }
    
}


// Inicializamos el movimiento del div con id que preporcionemos
function creaMovimiento(){
    for(var i=1; i<=contenedor.notas.length;i++){
        var activaMov=new movimiento(document.getElementById(i));}
}



function editar (div){

        var boton=document.getElementById(div.id).childNodes[3];
        boton.addEventListener("click", crear,false);

    function crear(){
        
        nuevoTitulo=document.createElement("input");
        nuevoTexto=document.createElement("input");
        divCambiar=document.createElement("div");
        botonAceptar=document.createElement("BUTTON");
        botonCancelar=document.createElement("BUTTON");


        botonAceptar.setAttribute("id","aceptar");
        botonCancelar.setAttribute("id","cancelar");
        divCambiar.setAttribute("id","cambio");
        nuevoTitulo.setAttribute("id","nuevoTitulo");
        nuevoTexto.setAttribute("id","nuevoTexto");
        nuevoTexto.setAttribute("type","text");
        nuevoTexto.setAttribute("type","text");


        botonAceptar.innerText="OK";
        botonCancelar.innerText="Cancelar"
        nuevaFecha=new Date();
        divCambiar.appendChild(botonAceptar);
        divCambiar.appendChild(botonCancelar);
        divCambiar.appendChild(nuevoTitulo);
        divCambiar.appendChild(nuevoTexto);
        document.body.appendChild(divCambiar);

        var ok=document.getElementById("cambio").childNodes[0];
        var cancelar=document.getElementById("cambio").childNodes[1];
        ok.addEventListener("click", cambiar,false);
        cancelar.addEventListener("click", cerrar,false);
        function cambiar(){
            newTit=document.getElementById("nuevoTitulo").value;
            newText=document.getElementById("nuevoTexto").value;
            if(newText != "" && newTit != ""){
                div.childNodes[0].textContent=newTit;
                div.childNodes[1].textContent=newText;
                div.childNodes[2].textContent=nuevaFecha;
                divCambiar.remove();
                }

        }
        function cerrar(){
            divCambiar.remove();
        }
        
    }


}

