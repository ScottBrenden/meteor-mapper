'use strict';

function Meteor(opts) {
  Object.keys(opts).forEach(e => this[e] = opts[e]);
}
Meteor.all = [];

Meteor.loadAll = data => {
  Meteor.all = [];
  data.map(ele => Meteor.all.push(new Meteor(ele)));
};
