var arra=[1,2,3,4,5,6,7,8,9,10];

function ponerACero(array){
    for(var i=0;i<array.length;i++){
        array[i]=0;
    }
}

function suma1(array){
    for(var i=0;i<array.length;i++){
        array[i]=array[i]+1;
    }
}

ponerACero(arra);
suma1(arra);

function espacios(array){
    var cad="";
    for(var i=0; i<array.length;i++){
        cad=cad+array[i]+" ";
    }
    return cad;

}

document.write(arra+"<br>");
espacios(arra);
document.write(espacios(arra));


