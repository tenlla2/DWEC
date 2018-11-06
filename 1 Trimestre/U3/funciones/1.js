function max(){
    n1=prompt();
    n2=prompt();
    n3=prompt();
    n4=prompt();
    var max=0;
    if(n1>n2 && n1>n3 && n1>n4){
        max=n1;
    }
    else if(n2>n1 && n2>n3 && n2>n4){
        max=n2;
    }
    else if(n3>n2 && n3>n1 && n3>n4){
        max=n3;
    }
    else if(n4>n1 && n4>n3 && n4>n2){
        max=n4;
    }
    alert("El mayor es "+max);
}
max();