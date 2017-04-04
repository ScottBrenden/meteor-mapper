// (function(module){
  'use strict';

//This pulls the google maps API.
(function(module){
  function initMap() {
    // Meteor.fetchAll();

    var stylesArray = [
      {
        featureType: "all",
        stylers: [
          { hue: "#00ffe6" },
          { saturation: -20 }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    let mapOptions = {
      zoom: 15,
      styles: stylesArray,
      center: new google.maps.LatLng(47.618217, -122.351832),
      mapTypeId: google.maps.MapTypeId.STREET,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      }
    };

    var uluru = {lat: 47.618217, lng: -122.351832};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });

    google.maps.event.addDomListener(window, 'resize', function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(center);
    });

    let features = Meteor.all.map(met => {
      // mLat = parseFloat(meteor.reclat);
      // mLong = parseFloat(meteor.reclong);
      let feature = {
        position: new google.maps.LatLng(parseFloat(met.reclat), parseFloat(met.reclong)),
        type: 'meteors'
      }
    });
    console.log(features);

    let locations = Meteor.all.map(e => {
      e.reclat = parseFloat(e.reclat);
      e.reclong = parseFloat(e.reclong);
      let newPosition = {lat: e.reclat, lng: e.reclong};
      let marker = new google.maps.Marker({
      position: newPosition,
      map: map
    });



    let infowindow = new google.maps.InfoWindow({
      content: e.name
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    })
  });


  }
  module.initMap = initMap;
})(window);
// function renderMarkers(){
// }
  // module.map = map;

// })(window);
