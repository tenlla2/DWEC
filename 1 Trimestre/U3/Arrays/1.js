function paresImpares(){
    var array=[];
    for(var i=0;i<100;i++){
        array.push(Math.floor((Math.random() * 1000) + 1));
    }

    for(var i=1;i<array.length;i++)
		{
			for(var j=0;j<(array.length-i);j++)
			{
				if(array[j]%2!=0)
				{
					k=array[j+1];
					array[j+1]=array[j];
					array[j]=k;
				}
			}
		}
		document.write(array+"<br>");

}
paresImpares();




