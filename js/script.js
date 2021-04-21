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
	
	 var myMap = new google.maps.Map(el, mapOptions);
	 
	 
	 var marker = new google.maps.Marker({
      position: {lat: 54.0364, lng: 21.7667},
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "Gizycko"
	  
	  });
  var mst = new google.maps.Marker({
      position: {lat: 53.7784, lng: 20.4801},
      map: myMap,
      animation: google.maps.Animation.BOUNCE,
      title: "Olsztyn"
	  
	  
	 
	 
	
	