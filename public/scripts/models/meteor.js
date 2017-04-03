'use strict';


function Meteor(opts) {
  Object.keys(opts).forEach(e => this[e] = opts[e]);
}
Meteor.all = [];

Meteor.loadAll = data => {
  data.map(ele => Meteor.all.push(new Meteor(ele)));
};

Meteor.fetchAll = (callback) => {
return $.ajax({
  url: "https://data.nasa.gov/resource/y77d-th95.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : ""
  }
}).done(function(data) {
//console.log("Retrieved " + data.length + " records from the dataset!");
  //console.log(data);
 //(data.map((e) => e.name);
 Meteor.loadAll(data);
 callback();
});
};
//
// Meteor.fetchAll();
// console.log(Meteor.all);
