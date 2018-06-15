# Auth0_TechExe


[Solution Design] - 06/14/2018


Goal: Provide a solution that allows a customer to define limited access to their Auth0 User management API

Logic:

Based on signed in user job tile to sign the roles with granted permissions (read:data, write:data, delete:data)

 - Developer: can read the user information
 - Manager:   can read and update the user information
 - Admin:     can read, update and delete user information

Customer should use Auth0 Authorization Management extension to grant permissions to roles and add user to roles


Architecture design:

using implict flow for SPA - API authentication and authorization with Autho with one authorization request to get both id_token AND access token  

SPA:   Usermgmt-spa:  Node.js application with Angular to authenticate and authorize the user to access usermgmtAPI protected by Auth0 
API:   usermgmt-api:  Node.js API service protected by Auth0

Technical specifications:


 add "JobTitle" to the User_meadata while create Users through the Auth0 user management UI

 for basic version, add permission inside the scope so it will be included in the  

******************************************************

enhanced feature: (TBD: Based on availablity)

Do not use the Authorization Extension ---> Planning use customize rule to handling permission and roles based on 

Enable usage of refresh_token for mobile applications --> planning use silent authenticaiton to handle refresh_token  response_type = code id_token token and allow offline

Add your own custom rule (not from a template) that enriches the user profile --> for instance: Add custom claims in the rules

