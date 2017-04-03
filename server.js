'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
// const conString = 'postgres://postgres:1234@localhost:5432/';
const client = new pg.Client();
client.connect();
client.on('error', function(error) {
  console.error(error);
});
app.use(express.static('./public'));


app.get('/', (request, response) => response.sendFile('index.html', {root: '.'}));
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
