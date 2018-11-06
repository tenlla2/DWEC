function esMayuscula(letra){
    if(letra!=" "){
    return letra === letra.toUpperCase();}}

function esMinuscula(letra){
    if(letra!=" "){
    return letra === letra.toLowerCase();}}  

var may=false;
var min=false;
function distingue(cadena){
    for(var i = 0; i < cadena.length; i++){
        var letraActual = cadena.charAt(i);
        if(esMayuscula(letraActual)){
            may=true;}

        if(esMinuscula(letraActual)){
            min=true;}       
    }
    if(may && min==false){
        document.write("Solo contiene mayúsculas <br>");}
    else if(min && may==false){
        document.write("Solo contiene minúsculas <br>");}
    else
        document.write("Contiene mayúsculas y minúsculas <br>");
    
}
distingue("A AAAAAAAAAA AAAAAAAA");

function buscar(letra,cadena){
    cont=0;
    for(var i=0; i<=cadena.length;i++){
        letraActual=cadena.charAt(i);
        if(letraActual==esMayuscula(letra) || letra==esMinuscula(letra)){
            cont++;}
    }
    document.write(cont+"<br>");
}
buscar("a","antonio tenllAdo humanes");

function buscar2(cadena,subcadena){
        if(cadena.indexOf(subcadena)==-1){
            document.write("No está <br>");
        }
        else
        document.write("Si está <br>");
}
buscar2("Hola que pasa tio","Hola");

function ordena(cadena){
    var x = cadena.length;
    aux="";
    aux2="";
    vocales="aeiouAEIOUáéíóú";
    var y = vocales.length;
    var i=0;
    var j=0;
    while (i<=x) {
        
        while(j<=y){
            if(cadena.charAt(i)==vocales.charAt(j)){
                aux=aux+cadena.charAt(i);
            }
            j++;   
        }
        i++;
    }

    while (i<=x) {
        while(j<=y){
            if(cadena.charAt(i)!=vocales.charAt(j)){
                aux2=aux2+cadena.charAt(i);
            }
            j++;
        }
        i++;
    }
    document.write(aux.trim()+aux2.trim());
}
ordena("dejame en paz por favor");