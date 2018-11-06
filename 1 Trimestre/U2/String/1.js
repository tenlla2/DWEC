function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
   
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    document.write(cadenaInvertida+"<br>");
  }
  invertir("hola");

  function invertir2(cadena,separador) {
    var arrayDeCadenas = cadena.split(separador);
    var cadenaInvertida = "";
    var nuevaCadena="";
    for (var i=0; i < arrayDeCadenas.length; i++) {
        nuevaCadena=nuevaCadena+arrayDeCadenas[i]+" ";
     }
    
    var x = nuevaCadena.length;
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + nuevaCadena.charAt(x);
      x--;
    }
    document.write(cadenaInvertida+"<br>");
  }
  invertir2("hola como estás"," ");

  function masLarga(cadena,separador){
    var arrayDeCadenas = cadena.split(separador);
    var aux="";
    for(var i=0; i<arrayDeCadenas.length; i++){
        if(arrayDeCadenas[i].length>=aux.length){
            aux=arrayDeCadenas[i]
        }
    }

    document.write("La palabra más larga es: "+aux+ " con "+aux.length+" caracteres <br>");
  }
  masLarga("Hola a b c comotellamas yosoylamaslargacolega", " ");


  function masLargaQueI(cadena,separador,entero){
    var arrayDeCadenas = cadena.split(separador);
    var mayores=[];
    for(var i=0; i<arrayDeCadenas.length; i++){
        if(arrayDeCadenas[i].length>entero){
            mayores.push(arrayDeCadenas[i]);
        }
    }

    document.write(mayores.length+"<br>");
  }
  masLargaQueI("Hola a b c comotellamas yosoylamaslargacolega 77777777", " ",7);

  function pasarAMayuscula(cadena){
    var mayus="";
    var x = cadena.length;
    var i =0;
    while (i<=x) {
        if(i==0){
            mayus=mayus+(cadena.charAt(i).toUpperCase());
        }
        else{
            mayus = mayus + (cadena.charAt(i).toLowerCase());}
        i++;
      }
    document.write(mayus);

}
pasarAMayuscula("holA qUe haces?");
