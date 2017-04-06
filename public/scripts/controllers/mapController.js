'use strict';

(function(module) {
  const mapController = {};

  mapController.init = () => {
    meteorView.fetchAll(initMarkers);
    // $('#filter-one').val('');
    // $('#filter-two').val('');
    $('#about-page').hide();
    $('#map-filters').fadeIn('fast');
  };

  module.mapController = mapController;
})(window);
