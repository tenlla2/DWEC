function tabla2(columnas,alto,ancho){
    document.write("<table border='0' cellspacin='2' bgcolor='black'>");
    document.write("<tr height='"+alto+"'>");
    
    for(var i=1; i<=columnas; i++){
        if (i%2==0){
            document.write("<td width= '"+ancho+"' bgcolor='white'> &nbsp;</td>");
            }
       
        else{
            document.write("<td width= '"+ancho+"' bgcolor='black'> &nbsp;</td>");
            }
        
    }
    
    document.write("</tr>");
    document.write("</table>");
}
columnas=prompt();
alto=prompt();
ancho=prompt();
tabla2(columnas,alto,ancho);