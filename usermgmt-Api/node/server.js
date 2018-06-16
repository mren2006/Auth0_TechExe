const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');


require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'need to set AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

// Enable CORS
app.use(cors());

// Create middleware for checking the JWT
const checkJwt = jwt({
  // Dynamically provide a signing key in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://azuresec.auth0.com/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer.
  audience: 'https://usermgmtAPI.azuresec.com',
  issuer: 'https://azuresec.auth0.com/', //this is the testing tennant on the Auth0 SaaS service
  algorithms: ['RS256']
});

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// create usermgmts API endpoint for reading or listing data
app.get('/usermgmts', checkJwt, jwtAuthz(['read:data']), function (req, res) {
   

   // Do anything that can list data 
   // for instance: access to Auth0 management API to read user profile info
    
    //   GET /api/v2/users

    // this is a fake API call that need to access with write:data permission
   console.log("login User can ** read ** data on API");

  //send the response
  res.status(200).send();
});


// create usermgmts API endpoint for adding user to check write permission
app.get('/usermgmtadd', checkJwt, jwtAuthz(['write:data']), function (req, res) {

  
 // this is a fake API call that need to access with write:data permission
 
 // it is using GET to simplify the coding part, in real implementation it should use POST or PUT

  console.log("login User can ** write ** data on API");


  //send the response
  res.status(200).send();
});


// create usermgmts API endpoint to check delete permission
app.get('/usermgmtdelete', checkJwt, jwtAuthz(['delete:data']), function (req, res) {
  
   // this is a fake API call that need to be accessed with delete:data permission
 
 // it is using GET to simplify the coding part, in real implementation it should use DELETE

  console.log("login User can ** delete ** data on API");
  
  //send the response
  res.status(200).send();
});



// launch the API Server at localhost:6060
app.listen(6060);
console.log('Listening on http://localhost:6060');
