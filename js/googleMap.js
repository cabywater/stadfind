$( document ).on( "pagecreate", "#stad_find", function( event ) {
    console.log("Stadium Finder loaded");
    init();
});

var map;
function init(){
    console.log("current location Search");
    navigator.geolocation.getCurrentPosition(getLoc, locError);
}

function getLoc(position) {
    console.log("found location");
    
    var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    
    initialise(latlng);
}
function locError(error) {
    console.log('There is an error'+error);
}

function initialise(latlng) {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };
	//prints the coordinates that are saved in JSON to console
	console.log(window.location.search.substring(1));

    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
	
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('panel'));
    var request = {
        origin: latlng,
        destination: window.location.search.substring(1),
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

}