var rellena=0;

export default class Tablero {
    constructor(filas,columnas) {
        //1-. Vamos a necesitar crear un array bidimensional en el que cada posición de "i" y "j" copuaran una imagen metida en el array.
        this.nuevoArray = new Array(filas);
        
        this.filas=filas;                                       //Creamos nuestro array bidimensional con el tamaño indicado.

        this.columnas=columnas;

        for(var i=0;i<this.filas;i++){
            this.nuevoArray[i] = new Array(columnas);}

        
        for(var i=0;i<this.filas;i++){
            for(var j=0; j<this.columnas;j++){      //Rellenamos el array
                this.nuevoArray[i][j]=rellena;
                rellena++;}
        }
        this.solucion = this.nuevoArray;
        this.columnaCero;
        this.filaCero;
        this.mezcla();
        }
    

    dibujar() {
        document.write("<table border='1' cellspacing='0' align='center'>");
        for (var i = 0; i <this.filas; i++) {
            
            document.write("<tr bgcolor='#FFFFFF' height='40'>");
            for (var j = 0; j <this.columnas; j++) {
                if(this.nuevoArray[i][j]==0){
                    document.write("<td id='casilla' align='center' width='40'></td>");
                
                }
                else{
                document.write("<td id='casilla' align='center' width='40'>'"+this.nuevoArray[i][j]+"'</td>");
                }
            }
        
        }
        document.write("</tr>");
        document.write("</table>");

    }

    mover(direccion){
        this.encuentraCero();
        switch(direccion){                     
            case "izquierda":
                if(this.columnaCero>0){
                    this.nuevoArray[this.filaCero][this.columnaCero]=this.nuevoArray[this.filaCero][this.columnaCero-1];
                    this.nuevoArray[this.filaCero][this.columnaCero-1]=0
                    }
                    break;
                                            
            case "derecha":
                if(this.columnaCero<this.columnas-1){
                    this.nuevoArray[this.filaCero][this.columnaCero]=this.nuevoArray[this.filaCero][this.columnaCero+1];
                    this.nuevoArray[this.filaCero][this.columnaCero+1]=0
                    }
                    break;

            case "arriba":
                if(this.filaCero>0){
                    this.nuevoArray[this.filaCero][this.columnaCero]=this.nuevoArray[this.filaCero-1][this.columnaCero];
                    this.nuevoArray[this.filaCero-1][this.columnaCero]=0
                    }
                    break;
            
            case "abajo":
                if(this.filaCero<this.filas-1){
                    this.nuevoArray[this.filaCero][this.columnaCero]=this.nuevoArray[this.filaCero+1][this.columnaCero];
                    this.nuevoArray[this.filaCero+1][this.columnaCero]=0
                    }
                    break;
                    
                   
                   
                
        }   
    }
    
    mezcla(){
        for(var i=0;i<1000;i++){
            var aleatorio = Math.floor(Math.random()*4);
            if(aleatorio==0){
                this.mover("izquierda");
            }
            if(aleatorio==1){
                this.mover("derecha");
            }
            if(aleatorio==2){
                this.mover("arriba");
            }
            if(aleatorio==3){
                this.mover("abajo");
            }
        }
    }
    

    encuentraCero(){
        var x,y;
        for(x=0;x<this.filas;x++){
            for(y=0;y<this.columnas;y++){
                if(this.nuevoArray[x][y]==0){
                    this.columnaCero=y;
                    this.filaCero=x;
                }
            }
        }
    }

    resolver(){
            this.resuelto=true;
            var x,y,total=0;
            var cont=0;
            for(x=0;x<this.filas;x++){
                for(y=0;y<this.columnas;y++){
                    if(this.nuevoArray[x][y]!=cont){
                        this.resuelto=false
                    }cont++;
                }
           
            }
            if(this.resuelto){
                alert("Has ganado");
            }
    }


}


