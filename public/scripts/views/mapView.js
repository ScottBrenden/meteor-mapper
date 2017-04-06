'use strict';

var map = {};
var locations = [];
function initMap () {
    //This only needs to be called once.
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.0997, lng: -94.5786},
      zoom: 4,
      mapTypeId: 'roadmap'
    });

    //This only needs to be called once.
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    //This only needs to be called once.
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    //44-76 only need to be called once.
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);

    });
  };

  function initMarkers() {
    locations.forEach(e => {
      e.setMap(null)
    });

    let previousMarker = false;
    locations = Meteor.all.map(e => {
    e.reclat = parseFloat(e.reclat);
    e.reclong = parseFloat(e.reclong);
    let newPosition = {lat: e.reclat, lng: e.reclong};
    let marker = new google.maps.Marker({
      position: newPosition,
      icon: 'images/marker31x50.png',
      map: map
    });
    let infowindow = new google.maps.InfoWindow({
      content: `${e.name}, ${e.mass/1000}kg, ` + String(e.year).slice(0, 4)
    });
    google.maps.event.addListener(marker, 'click', function() {
      if(previousMarker){
        previousMarker.close();
      }
      infowindow.open(map, marker);
      previousMarker = infowindow;
    })
    marker.setMap(map);
    return marker;
  })
}
