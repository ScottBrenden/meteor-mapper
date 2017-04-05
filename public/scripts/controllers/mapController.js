'use strict';

(function(module) {
  const mapController = {};

  mapController.init = () => {
    Meteor.fetchAll(initAutocomplete);
    console.log('in mapctrl init');
    $('#about').hide();
    $('#map-ilters').fadeIn('fast');
    console.log('end mapctrl init');
  };

  module.mapController = mapController;
})(window);
