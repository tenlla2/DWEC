/*Let's try to use the geolocation information with the API of Google Maps.
Use a map to show your location
Draw a marker in your location
Find a way to know the address of your location (reverse geocoding).
Look for the way to animate your marker*/

function initMap(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(success);
    }
}

function success (position){
    //Obtenemos las coordenadas
    var myPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
    //Creamos un mapa centrado en las coordenadas dadas
    var map = new google.maps.Map(
    document.getElementById('map'),{zoom: 4, center: myPosition});
    //Creamos un marcador
    var marker = new google.maps.Marker({position: myPosition, map: map, animation: google.maps.Animation.DROP});
    //Creamos la ventanita de informacion y el geocoder
    var infoWindow = new google.maps.InfoWindow;
    var geocoder = new google.maps.Geocoder;
    //Llamamos a la funcion que nos dirá la direccion
    geocodeLatLng(geocoder, map, infoWindow, myPosition, marker);
}

function geocodeLatLng(geocoder, map, infoWindow, latlng, marker){
    geocoder.geocode({location: latlng}, function(results, status){
        if(status === "OK"){
            if(results[0]){
                infoWindow.setContent(results[0].formatted_address);
                infoWindow.open(map, marker);
            }else{
                window.alert("No se encontraron resultados");
            }
        }else{
            window.alert("Geocoder failed due to:" +status);
        }
    });
}