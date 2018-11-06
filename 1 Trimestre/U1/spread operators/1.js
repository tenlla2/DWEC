function suma(...valores){
    var sum =0; 
    for(var i=0;i<valores.length;i++){
       sum += valores[i];}
     return sum;
  }
array=[1,2,3,4];
document.write(suma(1,2,3,4)+"<br>");

function añadir(...valores){
    var sum =0; 
    for(var i=0;i<valores.length;i++){
       if(typeof(valores[i])=="number"){
           sum+= valores[i];
       }
    }return sum;
  }
array2=[1,'Hola',3,4];
document.write(añadir(1,"hola",3,4)+"<br>");


function combinar(array,array2){
    var arrayCombinado;
    arrayCombinado=[...array,...array2];
    document.write(arrayCombinado+"<br>");
}
combinar(array,array2);

function suma_impar(array){
    var sum =0; 
    for(var i=0;i<array.length;i++){
       if(i%2 ==0){
           sum+= array[i];
       }
    }return sum;
  }

  document.write(suma_impar(array)+"<br>");

function cuadrados(){
    var suma=0;
    for(var i=0; i<arguments.length;i++){
        var cuadrado=arguments[i]*arguments[i];
        suma = suma+cuadrado;
    }
    return suma;
}  

document.write(cuadrados(1,2,3,4)+"<br>");

function valoresUnicos(...valores){
    let array=[];
    for(let i=0; i< valores.length; i++){
        if(!array.includes(valores[i])){
            array.push(valores[i]);}
        }
    return array;
    }
console.log(valoresUnicos("hola","pepe","hola"));


function combineArrays(...datos){
    var result=[];
    for(let i=0;i<datos.length;i++){
        
        result=[...result,...datos[i]];

    }
    return result;
}
document.write(combineArrays([1,2],[3,4]));