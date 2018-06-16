const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');


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
    jwksUri: 'https://azuresec.auth0.com/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer.
  audience: 'https://usermgmtAPI.azuresec.com',
  issuer: 'https://azuresec.auth0.com/',
  algorithms: ['RS256']
});

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// create usermgmts API endpoint
app.get('/usermgmtadd', checkJwt, jwtAuthz(['write:data']), function (req, res) {
  //var usermgmt = req.body;

  console.log("login User can ** write ** data on API");
  // append the usermgmt
  //usermgmts.push(req.body);

  //send the response
  res.status(200).send();
});

// create usermgmts API endpoint
app.get('/usermgmts', checkJwt, jwtAuthz(['read:data']), function (req, res) {
   
    // Get all users for this user
    console.log("login User can ** read ** data on API");
    // call auth0 mangement API --   GET /api/v2/users

  //send the response
  res.status(200).send();
});

app.get('/usermgmtdelete', checkJwt, jwtAuthz(['delete:data']), function (req, res) {
 
   
  
  console.log("login User can ** delete ** data on API");
  
  //send the response
  res.status(200).send();
});



// launch the API Server at localhost:6060
app.listen(6060);
console.log('Listening on http://localhost:6060');
