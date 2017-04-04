'use strict';

function initMap() {
  Meteor.fetchAll();
}

let locations = Meteor.all.map(e => {
  e.reclat = parseInt(e.reclat);
  e.reclong = parseInt(e.reclong);
  let newPosition = {lat: e.reclat, lng: e.reclong};
  new google.maps.Marker({
  position: newPosition,
  map: map
    });
  });
