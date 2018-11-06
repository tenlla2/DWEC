
numero_para_adivinar=prompt("Introduce el número");

numero=prompt("Inténtalo!");
do {
    if(numero > numero_para_adivinar){
        alert("El numero es menor");
        numero=prompt("Inténtalo!");}
    else if (numero < numero_para_adivinar){
        alert("El numero es mayor");
        numero=prompt("Inténtalo!");}
}
while (numero != numero_para_adivinar);
alert("has ganado");