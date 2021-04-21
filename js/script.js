function initMap(){
var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(51.9194, 19.1451);
	var mapOptions = {
		center: myLocation,
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.roadmap,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};