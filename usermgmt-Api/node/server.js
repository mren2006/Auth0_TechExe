const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const usermgmts  = require('./fakeData').users();
const _ = require('lodash');

require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

// Enable CORS
app.use(cors());

// Create middleware for checking the JWT
const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: 'https://${process.env.AUTH0_DOMAIN}/',
  algorithms: ['RS256']
});

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Batch upload endpoint
app.post('/usermgmts/upload', checkJwt, jwtAuthz(['batch:upload']), function (req, res) {
  var usermgmt = req.body;

 // call list all 
 console.log("login User can list all data");
  // append the usermgmt
  usermgmts.push(req.body);

  //send the response
  res.status(201).send(usermgmt);
});

// create usermgmts API endpoint
app.post('/usermgmts', checkJwt, jwtAuthz(['write:data']), function (req, res) {
  var usermgmt = req.body;

  console.log("login User can write data");
  // append the usermgmt
  usermgmts.push(req.body);

  //send the response
  res.status(201).send(usermgmt);
});

// create usermgmts API endpoint
app.get('/usermgmts', checkJwt, jwtAuthz(['read:data']), function (req, res) {
   
    // Get all users for this user
    console.log("login User can read data");
    // call auth0 mangement API --   GET /api/v2/users

  //send the response
  res.status(200).send(userEntries);
});

app.put('/delete/:id', checkJwt, jwtAuthz(['delete:data']), function (req, res) {
 
 
    var entry = usermgmts.filter(entry => entry.id == req.params.id)[0];
  entry.deleted = true;

  console.log("login User can read data");
  
  //send the response
  res.status(200).send(entry);
});



// launch the API Server at localhost:6060
app.listen(6060);
console.log('Listening on http://localhost:6060');
