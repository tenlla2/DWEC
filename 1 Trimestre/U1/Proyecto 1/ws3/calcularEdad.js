
function calculaEdad(nacimiento,actual){
    document.write("Tu edad es "+ ((actual-nacimiento)-1)+ " / "+ (actual-nacimiento)+"<br> ");}

calculaEdad(1994,2018);
var d = new Date();

calculaEdad(1994,d.getFullYear());