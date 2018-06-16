# Auth0_TechExe

Goal: Provide the solution that allows a customer to define limited access to their Auth0 User management API

## art 2: # Angular Single Page Application  --   usermgmt-SPA

This sample application is a re-designed and re-purposed version to follow the Auth0 [Architecture Scenarios](https://auth0.com/docs/architecture-scenarios),to meet the specific requirement above to allow limit access to API and SPA web pages/menus as per signed user's jobtitle related permission level

## Implementation

This part includes the Single Page Application (SPA) implementation using [Angular] and Node.Js

## Prerequisites

* Auth0 account
* [Node Package Manager (NPM)](https://docs.npmjs.com/cli/version)

## Set the configuration values

* `{DOMAIN}`: Set this to the value of the Auth0 Domain you registered.

* `{CLIENT_ID}`: Set this to the value for the Auth0 Client - SPA application 

* `{API_IDENTIFIER}`: Set this to the value for the API Identifier.  in this exercise, the usermgmt-API has an identifier as https://usermgmtAPI.azuresec.com 


## Deploy & Run

To test this application, you will need to also configure and run the corresponding API. Please see the [README.md](../usermgmts-api/node/README.md) for the API for instructions on how to configure and run the API.

Once the API is running, you can open a terminal window to the folder in which this README.md is (`/usermgmts-spa`) and install the required packages for the Angular SPA by running:

npm i

Once the packages are installed, you can then run the Angular app:

npm start

or if has angular cli, run:

ng server

The application will be served at `http://localhost:4200`.  Important: use Chrome for as testing browser for this project

The https://azuresec.auth0.com also configured the google IDP as the authentication identity provider.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.

