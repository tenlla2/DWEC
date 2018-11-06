
numero_para_adivinar= parseInt(prompt("Introduce el número"));

numero=parseINT(prompt("Inténtalo!"));

while (numero != numero_para_adivinar){
    if(numero > numero_para_adivinar){
        alert("El numero es menor");}
    else if (numero < numero_para_adivinar){
        alert("El numero es mayor");}
    
    numero=parseINT(prompt("Inténtalo!"));
    
}
alert("has ganado");