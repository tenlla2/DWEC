function getRandomInt(n) {
    return Math.floor(Math.random() * Math.floor(n));
  }

document.write(getRandomInt(2)+"<br>");

function random2Numeros(n,m){
    return Math.floor((Math.random()* (m-n))+n);
}
function random100_1200Numeros(){
    return Math.floor((Math.random()* (200-100))+100);
}
document.write(random100_1200Numeros()+"<br>");
document.write(random2Numeros(1,10)+"<br>");

