function initMap(){ 
    if("geolocation" in navigator){
        navigator.geolocation.watchPosition(success);
    }
}

function success(position){
    var latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:3,
        center: latlng
    });
    routeCoords.push(latlng);
    var routePath = new google.maps.Polyline({
        path: routeCoords,
        geodesic: true,
        strokeColor: "#0040FF",
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    routePath.setMap(map);
} 
var routeCoords = [];