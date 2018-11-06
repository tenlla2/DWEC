function num1(){
    let fecha=new Date();
    document.write(fecha.getFullYear()+"<br>");
    document.write((fecha.getMonth()+1)+"<br>");
    document.write(fecha.getUTCDate()+"<br>");
    document.write(fecha.getHours()+"<br>");
    document.write(fecha.getMinutes()+"<br>");
    document.write(fecha.getSeconds()+"<br>");
}
num1();

function num2(){
    let fecha=new Date();
    var fecha85 = new Date(fecha.setDate(fecha.getDate() + 85));
    document.write(fecha85+"<br>");
    var fecha187= new Date(fecha.setDate(fecha.getDate() - 187));
    document.write(fecha187+"<br>");
    fecha85.setFullYear(fecha85.getFullYear()+2);
    document.write(fecha85+"<br>");
    fecha187.setHours(fecha187.getHours()-24);
    document.write(fecha187+"<br>");
    var fechaResto = new Date(fecha.setDate(fecha85.getDate()-fecha187.getDate()));
    document.write(fechaResto+"<br>");
   
    
}
num2();
/*
cont=60;
var tiempo = setInterval(function(){
   console.log(cont);
    if (cont===0){
        clearInterval(tiempo);
        location.reload();
    }
    cont--;
},1000);
*/


function reloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
   
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
   
    console.log(horas+':'+minutos+':'+segundos);
    setTimeout(reloj,1000);
  }
reloj();