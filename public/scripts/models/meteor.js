'use strict';


function Meteor(opts) {
  Object.keys(opts).forEach(e => this[e] = opts[e]);
}
Meteor.all = [];

Meteor.loadAll = data => {
  data.map(ele => Meteor.all.push(new Meteor(ele)));
};

Meteor.fetchAll = () => {
return $.ajax({
  url: "https://data.nasa.gov/resource/y77d-th95.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : ""
  }
}).done(function(data) {
  data.map(ele => Meteor.all.push(new Meteor(ele)));
});
};
//
// Meteor.fetchAll();
// console.log(Meteor.all);
