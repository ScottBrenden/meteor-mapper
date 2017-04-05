'use strict';

(function(module) {
  const mapController = {};

  mapController.init = () => {
    console.log('in mapController');
    Meteor.fetchAll(initAutocomplete);
    $('#about').hide();
    $('#map-ilters').fadeIn('fast');
  };

  module.mapController = mapController;
})(window);
