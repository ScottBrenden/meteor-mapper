'use strict';

(function(module) {
  const mapController = {};

  mapController.init = () => {
    Meteor.fetchAll(initAutocomplete);
    $('#about').hide();
    $('#map-filters').fadeIn('fast');
  };

  module.mapController = mapController;
})(window);
