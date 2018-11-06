function lanzamiento(){
    n6=0;
    n5=0;
    n4=0;
    n3=0;
    n2=0;
    n1=0;
    cont=0;
    while(cont<6000){
    aleatorio= Math.floor((Math.random() * 6) + 1);
    if(aleatorio==6){
        n6++;
    }
    else if(aleatorio==5){
        n5++;
    }
    else if(aleatorio==4){
        n4++;
    }
    else if(aleatorio==3){
        n3++;
    }
    else if(aleatorio==2){
        n2++;
    }
    else if(aleatorio==1){
        n1++;}
    cont++;}
    document.write("Número 6: "+n6+ " veces <br>");
    document.write("Número 5: "+n5+ " veces <br>");
    document.write("Número 4: "+n4+ " veces <br>");
    document.write("Número 3: "+n3+ " veces <br>");
    document.write("Número 2: "+n2+ " veces <br>");
    document.write("Número 1: "+n1+ " veces <br>");
}
lanzamiento();

function pot(base, exponente){
    return exponente == 0 ? 1 : base*pot(base, exponente -1);}

document.write(pot(10,2)+"<br>");

function fac(n){
    return n == 0 ? 1 : n*fac(n-1);}

document.write(fac(5)+"<br>");