function calculaAngulo(angulo){
    radianes=90*Math.PI/180;
    sen= Math.sin(radianes);
    cos= Math.cos(radianes);
    tang= Math.tan(radianes);
    document.write("seno = "+sen+"; coseno = "+cos+"; tangente = "+tang+"<br>");
}
calculaAngulo(90);

function calculaHipotTriangulo(c1,c2){
    h = Math.sqrt(c1*c1+c2*c2);
    return h
}
document.write(calculaHipotTriangulo(20,30)+"<br>");

var resultado = "y";

do {
    
    c1=prompt("Primer cateto");
    c2= prompt("Segundo cateto");
    
    if (resultado == "n" || resultado=="N") {
        break;
    }
    else if(resultado !="y" && resultado !="Y" && resultado != "n" && resultado != "N"){
        document.write("Debe introducir un carácter válido");
    }
   
    else {
        
        document.write(calculaHipotTriangulo(c1,c2)+"<br>");
    }

   
} while (resultado=prompt("Desea seguir? y/n"));

