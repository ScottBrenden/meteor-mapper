'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('.page-tab').hide();
    $('#about').fadeIn('fast');
  };

  module.aboutController = aboutController;
})(window);
