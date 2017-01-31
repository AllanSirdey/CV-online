function myMap() {
    //http://www.coordonnees-gps.fr/
    var myCenter = new google.maps.LatLng(47.46405599999999, -0.49731759999997394);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 12
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: "J'habite içi :) !"
    });
    infowindow.open(map, marker);
}