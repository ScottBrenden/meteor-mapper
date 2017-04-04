'use strict';
//
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

const request = require('superagent');
const nasaURL = 'https://data.nasa.gov/resource/y77d-th95.json';
//const conString = 'postgres://postgres:potatobabe@localhost:5432/meteors';
//const conString = 'postgres://postgres:1234@localhost:5432/meteors';
//const conString = 'postgres://postgres:flight19@localhost:5432/meteors';
const conString = process.env.DATABASE_URL || 'postgres://postgres:hofbrau@localhost:5432/meteors';
const client = new pg.Client(conString);
let nasaData = [];

client.connect();
client.on('error', function(error) {
  console.error(error);
});
app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: '.'}));
loadDB();
request.get(nasaURL)
.then(res => {
//  console.log(res.body[0]);
  nasaData = res.body;
  console.log(res.body.length);
  //console.log(nasaData);
  nasaData.map(ele => {
    //console.log(ele);
          client.query(`
            INSERT INTO
            meteors(name, "year", mass, recclass, reclat, reclong)
            VALUES ($1, $2, $3, $4, $5, $6);
            `,
            [ele.name, ele.year, ele.mass, ele.recclass, ele.reclat, ele.reclong]
          ).catch(console.error);
        })
}).catch(err => console.error(err));
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

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
  )/*.then(loadMeteors)*/.catch(console.error);
}
