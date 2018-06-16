# Auth0_TechExe

[Solution Design] - modified on 06/16/2018

Overall Goal: Provide a solution that allows a customer to define limited access to their User management API based on a login user's job Title, identity is protected by Auth0

A. Authorization Logic:

Based on signed-in user's job tile, sign the roles with granted permissions (read:data, write:data, delete:data) to the identity for user to access the API functions that they are granted permission to access

 - Developer: can read the user information on API (Role: users)
 - Manager, director:   can read and update the user information on API (Role: managers)
 - Admin:     can read, update and delete user information on API (Role: Administrators)

Customer will need to use Auth0 Authorization Management extension on Auth0 to grant permissions to roles, and add user to roles based on the user's Job Title

B. Solution Architecture design:

using implict flow for SPA - API authentication and authorization implemented by Auth0, SPA will fire one authorization request to Auth0 get both id_token AND access token, which include user profile and permissions inside the scope of the token; extract the permission from the JWT sent from SPA to API while access the API functions, only users who have granted matching permissions can access that API endpoint  

SPA:   Usermgmt-spa:  Node.js application with Angular to authenticate and authorize the user to access usermgmtAPI protected by Auth0 

API:   usermgmt-api:  Node.js API service protected by Auth0

C. Technical specifications:

1. Add "JobTitle" to the User_meadata while create Users through the Auth0 user management UI; user's permission is applied to app_metadata fields based on the rule settings from 
   the Authorization externsion rules

2. For basic solution version, add permission inside the requested scope so it will be included in the bearer token when SPA application call the API to check the access permisson for API functions (defined limited access) -- this requires manually configuration for extension, role, permission and add users to roles from Auth0 management UI

3. Advanced solution: use a customized rule to include the user metadata inside the Id_Token in response, then retrieve the JWT to find the JobTitle, still define user's permission based on roles to access the API functions, but this can be difined on the fly (inside the code flow). -- This does not requires manually configuration, it falls through the code follow


******************************************************

D: enhanced feature: (TBD: will be implemented based on availablity)

1. Enable usage of refresh_token for SPA applications - silent authentication 

2. Do not use the Authorization Extension ---> Planning use customize rule to handling permission and roles based on user's job Title when creating or updating a user 

3. Add your own custom rule (not from a template) that enriches the user profile --> for instance: Add custom claims in the rules

4. Enable usage of refresh_token for mobile applications --> planning use silent authenticaiton to handle refresh_token  response_type = code id_token token and allow offline_Access