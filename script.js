function initMap() {
		var location = {lat: 42.663, lng:23.365};
		var map = new google.maps.Map(document.getElementById("map"),{
			zoom:15,
			center:location
		});
		var marker = new google.maps.Marker( {
			position: location,
			map: map
		})
	}