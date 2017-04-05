'use strict';
// (function(module) {
const meteorView = {};

meteorView.handleDecadeFilter = callback => {
$('#filter-one').on('change', function() {
  $.ajax({url: '/meteors/find', method:'GET', headers: {val: this.value + '-01-01', val2: parseInt(this.value) + 10 + '-01-01'}})

  // '/meteors/find', {val: this.value})
  .then(results => Meteor.loadAll(results));
  callback();

    // {console.log(results.map(e => parseInt(JSON.stringify(e.year).slice(1, 5)).filter(i => i >= this.value).filter(j => j < this.value + 10)  )  )});

  //this.value;
});

};
meteorView.handleDecadeFilter(initMarkers);
