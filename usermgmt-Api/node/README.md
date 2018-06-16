# Auth0_TechExe: 

Provide the solution that allows a customer to define limited access to their Auth0 User management API

## part 1: User Management API

 https://usermgmtAPI.azureSec.com -- A authorized API that limit user access based on their job titles  

## Implementation

the API implementation using Node.js and the [Express](http://expressjs.com/) framework.

## Prerequisites

- Auth0 account  
- Node.js v6.6.0

## Set the configuration values

Auth0_DOMAIN: Set value of your Auth0 Domain.   ## azuresec.auth0.com 

Auth0_IDENTIFIER: Set value of your API Identifier.  ## https://usermgmtApi.azuresec.com

## Deploy & Run

Open a terminal and navigate to the folder in which this README.md is (`/usermgmt-api/node`). Install the required packages for the Node.js API by running:

npm i

Once the packages are installed, you can then run the server:

node server

## Test

Assume that you already have an Auth0 account and you have configured your API in the dashboard.

You can test the API in conjunction with the SPA client (located in `./usermgmt-spa/`). Alternatively you can test it using a tool with which you can make HTTP requests (such as Postman or CURL)

### Invoke the API

To invoke the API start the node process and make a `GET` request to `http://localhost:6060/usermgmts`, `http://localhost:6060/usermgmtadd`, `http://localhost:6060/usermgmtdelete`

You should add an `Authorization` header with the value `Bearer eyJ0eXAiOiJKV1QiKLPhbGciOiJSUzI1NiIsImtpZCI6Ik1qUXlOVFEyTURoR...`

Notice since this is an identity POC project, the API function does not do anything, except write a log on console to prove the user accessed the protected API functions

Since the API is protected by JWTAuth it will access via user's permissions inside its Token (scope)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.

