'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const conString = 'postgres://postgres:flight19@localhost:5432/meteors';
const client = new pg.Client(conString);
client.connect();
client.on('error', function(error) {
  console.error(error);
});
app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: '.'}));

loadDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));


function loadMeteors(){
  console.log('in loadMeteors');
  client.query('SELECT COUNT(*) FROM meteors')
  .then(result => {
    if(!parseInt(result.rows[0].count)) {
      console.log('in loadMeteors if');
      Meteor.fetchAll();
      Meteor.all.map(ele => {
        client.query(`
          INSERT INTO
          meteors(name, "year", mass, recclass, reclat, reclong)
          VALUES $1, $2, $3, $4, $5, $6
          `,
          [ele.name, ele.year, ele.mass, ele.recclass, ele.reclat, ele.reclong]
        ).catch(console.error);
      })
    }
  })
}

function loadDB(){
  client.query(`
    CREATE TABLE IF NOT EXISTS
    meteors (
        id SERIAL PRIMARY KEY,
        name TEXT,
        "year" DATE,
        mass DECIMAL,
        recclass TEXT,
        reclat DECIMAL,
        reclong DECIMAL
    )`
  ).then(loadMeteors).catch(console.error);
}
