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

Meteor.findWhere = (field, value, callback) => {
  $.get('/meteors/find', {field: field, val: value})
  .then(callback)
};
