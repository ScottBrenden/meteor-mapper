'use strict';

(function(module) {
  const mapController = {};

  mapController.init = () => {
    Meteor.fetchAll(initMarkers);
    $('#filter-one').val('');
    $('#filter-two').val('');
    $('#about').hide();
    $('#map-filters').fadeIn('fast');
  };

  module.mapController = mapController;
})(window);
