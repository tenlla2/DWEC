/*Develop a web app in which:
Test if geolocation is available.
If it's available, show the current position (latitude and longitude)
If it isn't available, show a message for each and everyone of the possible errors.
Improve your code so you show the position continuously (although the user could be in moving, so it could change)
Find the way to meassure the distance traveled.*/

if("geolocation" in navigator){
    navigator.geolocation.watchPosition(success);
}else{
    console.log("Your browser doesn't support the geolocation");
}


function success(position){
    var latitude = position.coords.position;
    var longitude = position.coords.position;
    console.log("Latitud: "+latitude);
    console.log("Longitud: "+longitude);
}