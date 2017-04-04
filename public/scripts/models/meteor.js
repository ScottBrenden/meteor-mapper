'use strict';

function Meteor(opts) {
  Object.keys(opts).forEach(e => this[e] = opts[e]);
}
Meteor.all = [];

Meteor.loadAll = data => {
  data.map(ele => Meteor.all.push(new Meteor(ele)));
};

Meteor.fetchAll = callback => {
  console.log(callback);
  $.get('/meteors')
  .then(results => {
      Meteor.loadAll(results);
      callback();
    })
  // .then(() => {
  //   console.log('IS THERE AUTOCOMPLETE HERE?', window.autoComplete.initMap);
  //   autoComplete.initMap();
  // })
};
Meteor.findWhere = (field, value, callback) => {
  $.get('/meteors/find', {field: field, val: value})
  .then(callback)
};
