
function suministro(edad,cantidad_por_dia){
    edad_maxima=100;
    año= (Math.round(cantidad_por_dia))*365;
    total_años=edad_maxima-edad;
    document.write("Necesitas "+año*total_años+ " para que te dure hasta la edad de "+edad_maxima+"<br>");

}

suministro(99,1);
suministro(99,2);
suministro(99,1.8);