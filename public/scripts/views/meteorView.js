'use strict';
// (function(module) {
const meteorView = {};

meteorView.handleDecadeFilter = callback => {
$('#filter-one').on('change', function() {
  if (this.value){
  $('#filter-two').val('');
  $.ajax({url: '/meteors/decade', method:'GET', headers: {val: this.value + '-01-01', val2: parseInt(this.value) + 10 + '-01-01'}})
  .then(results => {
    Meteor.loadAll(results)
    callback();
  });
} else {
  Meteor.fetchAll(initAutocomplete);
}
});

};

meteorView.handleMassFilter = callback =>{
  $('#filter-two').on('change', function(){
    if (this.value){
      switch(this.value){
        case 'small':
          var valueOne = 0;
          var valueTwo = 1000;
          break;
        case 'medium':
          var valueOne = 1000;
          var valueTwo = 10000;
          break;
        case 'big':
          var valueOne = 10000;
          var valueTwo = 10000000000;
          break;
      }
      $('#filter-one').val('');
      $.ajax({url: '/meteors/mass', method: 'GET', headers: {val: valueOne, val2: valueTwo}})
      .then(results => {
        Meteor.loadAll(results);
        callback();
      });
    } else {
      Meteor.fetchAll(initAutocomplete);
    }
  });
};
meteorView.handleDecadeFilter(initAutocomplete);
meteorView.handleMassFilter(initAutocomplete);
