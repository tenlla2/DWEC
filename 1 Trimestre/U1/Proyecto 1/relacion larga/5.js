function tabla2(columnas,alto,ancho){
    document.write("<table border='0' cellspacin='2' bgcolor='black'>");
    document.write("<tr height='"+alto+"'>");
    
    var i=1;
    while(i<=columnas){
        if (i%2==0){
            document.write("<td width= '"+ancho+"' bgcolor='white'> &nbsp;</td>");
            i++;
            }
       
        else{
            document.write("<td width= '"+ancho+"' bgcolor='black'> &nbsp;</td>");
            i++;    
        }
        
    }
    
    document.write("</tr>");
    document.write("</table>");
}
columnas=prompt();
alto=prompt();
ancho=prompt();
tabla2(columnas,alto,ancho);