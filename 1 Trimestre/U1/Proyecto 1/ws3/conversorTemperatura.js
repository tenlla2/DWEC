function celFa(celsius){
    document.write(celsius+ " C son "+ ((celsius*1.8)+32) + " F <br>");
}

function faCel(faren){
    document.write(faren+ " F son "+ ((faren-32)/1.8)+ " C <br>");
}


celFa(40);
faCel(104);