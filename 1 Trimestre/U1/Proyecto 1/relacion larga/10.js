function tabla2(columnas,filas,alto,ancho){
    
    
    for (var i=1; i<=filas; i++){
        document.write("<table border='0' cellspacin='2' bgcolor='black'>");
        document.write("<tr height='"+alto+"'>");
        for(var j=1; j<=columnas; j++){
            if (j%2==0 && i%2==0){
                document.write("<td width= '"+ancho+"' bgcolor='black'> &nbsp;</td>");
               
                }
           
            else if(j%2==0 && i%2!==0){
                document.write("<td width= '"+ancho+"' bgcolor='white'> &nbsp;</td>")
            }

            else if(j%2!=0 && i%2==0){
                document.write("<td width= '"+ancho+"' bgcolor='white'> &nbsp;</td>")
            }
            else{
                document.write("<td width= '"+ancho+"' bgcolor='black'> &nbsp;</td>");
                
                }
            
        }
    }
    
    
    document.write("</tr>");
    document.write("</table>");
}

tabla2(8,8,50,50);