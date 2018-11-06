function tabla(columnas,alto,ancho){
    document.write("<table border='0' cellspacin='2' bgcolor='black'>");
    document.write("<tr bgcolor='white' height='"+alto+"'>");
    
    var i =1;
    while(i<=columnas) {
        document.write("<td width= '"+ancho+"'> &nbsp;</td>");
        i++;
    }
    
    document.write("</tr>");
    document.write("</table>");

}
columnas=prompt();
alto=prompt();
ancho=prompt();
tabla(columnas,alto,ancho);