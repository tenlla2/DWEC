function tabla2(columnas,filas,alto,ancho){
    
    
    for (var i=0; i<filas; i++){
        document.write("<table border='0' cellspacin='2' bgcolor='black'>");
        document.write("<tr height='"+alto+"'>");
        for(var j=0; j<columnas; j++){
            document.write("<td width= '"+ancho+"'bgcolor='white'> &nbsp;</td>");
        }
    }
    
    
    document.write("</tr>");
    document.write("</table>");
}
columnas=prompt("columnas");
filas=prompt("filas");
alto=prompt();
ancho=prompt();
tabla2(columnas,filas,alto,ancho);