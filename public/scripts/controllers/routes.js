'use strict';

page('/', Meteor.fetchAll(initAutocomplete));
page('/about', aboutController.index);
page();
