function ranFoto(){
    var foto = Math.floor(Math.random() * 3) + 1;
document.write("<img src="+foto+".jpg></img>")
}
ranFoto();