'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('.page-tab').hide();
    $('#about').fadeIn('fast');
  };

  module.aboutController = aboutController;
})(window);
