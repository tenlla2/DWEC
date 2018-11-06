function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
   
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }

function esPalindromo(palabra){
    if(palabra==invertir(palabra)){
        document.write("Es un palíndromo");}
    else
        document.write("No es una palíndromo");

}
esPalindromo("ese");

function tabla2(cadena,alto,ancho){
    var invertida= invertir(cadena);
    var x = "   L"
    var y = "   O"
    for (var i=0; i<cadena.length; i++){
        document.write("<table border='0' cellspacin='2' bgcolor='white'>");
        document.write("<tr height='"+alto+"'>");
        document.write("<td width= '"+ancho+"'bgcolor='white'>"+cadena.charAt(i)+" &nbsp;</td>");
        for(var j=0; j<cadena.length-1; j++){
            if (i==3){
                document.write("<td width= '"+ancho+"'bgcolor='white'>"+invertida.charAt(j+1)+" &nbsp;</td>");}
            
            if (i==0){
                document.write("<td width= '"+ancho+"'bgcolor='white'>"+cadena.charAt(j+1)+" &nbsp;</td>");}
            
            
            if(i==1){
                document.write("<td width= '"+ancho+"'bgcolor='white'>"+x.charAt(j+1)+" &nbsp;</td>");
            }
            if(i==2){
                document.write("<td width= '"+ancho+"'bgcolor='white'>"+y.charAt(j+1)+" &nbsp;</td>");
            }
        }
        
    }
    
    
    document.write("</tr>");
    document.write("</table>");
}
tabla2("HOLA",50,50);