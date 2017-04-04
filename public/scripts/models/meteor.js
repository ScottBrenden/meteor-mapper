'use strict';

function Meteor(opts) {
  Object.keys(opts).forEach(e => this[e] = opts[e]);
}
Meteor.all = [];

Meteor.loadAll = data => {
  data.map(ele => Meteor.all.push(new Meteor(ele)));
};

Meteor.fetchAll = function() {
  $.get('/meteors')
  .then(results => {
      Meteor.loadAll(results);
    })
  };
  // .then();
    // console.log(autoComplete.initMap);
    // console.log('line 19');
    // //autoComplete.initMap();
    // // callback &&
    // callback();


Meteor.findWhere = (field, value, callback) => {
  $.get('/meteors/find', {field: field, val: value})
  .then(callback)
};
