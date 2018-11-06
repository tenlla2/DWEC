
function resuelve2Grado(a,b,c){
    a = prompt("Introduce a");
    b= prompt("Introduce b");
    c= prompt("Introduce c");
    let resultado1=(-b +(Math.sqrt(b*b-4*a*c)))/(2*a);
    let resultado2=(-b -(Math.sqrt(b*b-4*a*c)))/(2*a);
    document.write("La primera solución es: "+ resultado1+ "<br>La segunda solución es: "+ resultado2);

}
resuelve2Grado(3,2,4);