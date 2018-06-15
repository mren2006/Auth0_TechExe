# Auth0_TechExe

Provide a solution that allows a customer to define limited access to their Auth0 User management API


## Implementation

This folder includes the API implementation using Node.js and the [Express](http://expressjs.com/) framework.

## Prerequisites

- Auth0 account
- Node.js v6.6.0

## Set the configuration values

Auth0_DOMAIN: Set this to the value of your Auth0 Domain.   ## azuresec.auth0.com 

Auth0_IDENTIFIER: Set this to the value of your API Identifier.  ## http://usermgmtApi.azuresec.com

## Deploy & Run

Open a terminal and navigate to the folder in which this README.md is (`/usermgmt-api/node`). Install the required packages for the Node.js API by running:

npm i

Once the packages are installed, you can then run the server:

node server


## Test

We assume that you already have an Auth0 account and you have configured your API in the dashboard.

You can test the API in conjunction with the SPA client (located in `/usermgmt-spa/angular`). Alternatively you can test it using a tool with which you can make HTTP requests (such as Postman or CURL) but following the steps below.


### Invoke the API

To invoke the API start the node process and make a `POST` request to `http://localhost:6060/usermgmt`.

You should add an `Authorization` header with the value `Bearer eyJ0eXAiOiJKV1QiKLPhbGciOiJSUzI1NiIsImtpZCI6Ik1qUXlOVFEyTURoR...`

The body payload should be in the following format:

json
{
	"user_title": "Developer",
	"user_id": "001"
   
}


You should get a response like the following:

json
{
  "message": "usermgmt user created as Developer: 001"
}



## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.

