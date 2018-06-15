const express = require('express');
const app = express();
const cors = require('cors');
const staticFile = require('connect-static-file');

app.use(cors());

//reserve to if implementing silent Authentication

//app.use('/silent', staticFile(`${__dirname}/silent.html`));

app.listen(1001);
console.log('Listening on http://localhost:1001');
