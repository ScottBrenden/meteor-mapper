'use strict';

// //This pulls the google maps API.
// (function(module){
function initMap() {
  Meteor.fetchAll();
}
//     var stylesArray = [
//       {
//         featureType: "all",
//         stylers: [
//           { hue: "#00ffe6" },
//           { saturation: -20 }
//         ]
//       },
//       {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [
//           { lightness: 100 },
//           { visibility: "simplified" }
//         ]
//       },
//       {
//         featureType: "road",
//         elementType: "labels",
//         stylers: [
//           { visibility: "off" }
//         ]
//       }
//     ];
//
//     let mapOptions = {
//       zoom: 15,
//       styles: stylesArray,
//       center: new google.maps.LatLng(47.618217, -122.351832),
//       mapTypeId: google.maps.MapTypeId.STREET,
//       zoomControl: true,
//       zoomControlOptions: {
//         position: google.maps.ControlPosition.RIGHT_CENTER
//       }
//     };
//
//     var uluru = {lat: 47.618217, lng: -122.351832};
//
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: uluru
//     });
//
//     google.maps.event.addDomListener(window, 'resize', function() {
//       var center = map.getCenter();
//       google.maps.event.trigger(map, 'resize');
//       map.setCenter(center);
//     });
//     var marker = new google.maps.Marker({
//       position: uluru,
//       map: map
//     });
let locations = Meteor.all.map(e => {
  e.reclat = parseInt(e.reclat);
  e.reclong = parseInt(e.reclong);
  let newPosition = {lat: e.reclat, lng: e.reclong};
  new google.maps.Marker({
  position: newPosition,
  map: map
    });
  });
//   }
//   module.initMap = initMap;
// // })(window);
// function renderMarkers(){
// }
//   module.map = map;
