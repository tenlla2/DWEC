function tabla(columnas,alto,ancho){
    document.write("<table border='0' cellspacin='2' bgcolor='black'>");
    document.write("<tr bgcolor='white' height='"+alto+"'>");
    
    for(var i=1; i<=columnas; i++){
        document.write("<td width= '"+ancho+"'> &nbsp;</td>");
    }
    
    document.write("</tr>");
    document.write("</table>");

}
columnas=prompt();
alto=prompt();
ancho=prompt();
tabla(columnas,alto,ancho);