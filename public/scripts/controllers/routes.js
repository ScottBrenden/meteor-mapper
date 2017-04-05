'use strict';


// page('/', Meteor.fetchAll(initMarkers));

page('/', mapController.init);
page('/about', aboutController.init);

page();
