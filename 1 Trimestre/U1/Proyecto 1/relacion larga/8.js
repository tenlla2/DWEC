
function tablasMultiplicar(){
    
    for(var i=1; i<=10; i++){
        document.write("<p"+i+"> Tabla del "+i+" </p"+i+"> <br>");
        for(var j=1; j<=10; j++){
            document.write(j+" x "+i+" = "+(j*i)+"<br>");
        }
    }
}

tablasMultiplicar();