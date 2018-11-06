function potencias(base,exponente){
    let resultado=1;
    for(var i=0; i<exponente;i++){
        resultado= resultado*(base);
    }
    document.write(resultado);
}
potencias(10,10);

function tabla2(filas,alto,ancho){
    
    
    for (var i=0; i<filas; i++){
        document.write("<table border='0' cellspacin='2' bgcolor='black'>");
        document.write("<tr height='"+alto+"'>");
        document.write("<td width= '"+ancho+"'bgcolor='white'>"+i+" &nbsp;</td>");
        for(var j=0; j<1; j++){
            document.write("<td width= '"+ancho+"'bgcolor='white'>"+Math.sin(i*Math.PI/180)+" &nbsp;</td>");
        }
    }
    
    
    document.write("</tr>");
    document.write("</table>");
}
tabla2(360,50,165);

function calculaAngulo(angulo){
    radianes=90*Math.PI/180;
    sen= Math.sin(radianes);
    cos= Math.cos(radianes);
    tang= Math.tan(radianes);
    document.write("seno = "+sen+"; coseno = "+cos+"; tangente = "+tang+"<br>");
}
