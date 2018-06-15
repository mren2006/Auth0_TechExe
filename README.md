# Auth0_TechExe


[Solution Design] - 06/14/2018


Overall Goal: Provide a solution that allows a customer to define limited access to their Auth0 User management API based on a login user's job Title

A. Authorization Logic:

Based on signed in user job tile to sign the roles with granted permissions (read:data, write:data, delete:data)

 - Developer: can read the user information on API
 - Manager:   can read and update the user information on API
 - Admin:     can read, update and delete user information on API

Customer use Auth0 Authorization Management extension to grant permissions to roles and add user to roles based on the user's Job Title


B. Solution Architecture design:

using implict flow for SPA - API authentication and authorization with Autho with one authorization request to get both id_token AND access token  

SPA:   Usermgmt-spa:  Node.js application with Angular to authenticate and authorize the user to access usermgmtAPI protected by Auth0 
API:   usermgmt-api:  Node.js API service protected by Auth0


C. Technical specifications:


1. Add "JobTitle" to the User_meadata while create Users through the Auth0 user management UI

2. For basic solution version, add permission inside the requested scope so it will be included in the bearer token when SPA application call the API to check the access permisson for API functions (defined limited access) -- this requires manually configuration for extension, role, permission and add users to roles from Auth0 management UI

3. Advanced solution 1: use a customized rule to include the user metadata inside the Id_Token in response, then retrieve the JWT to find the JobTitle, then   directly find out the user's permission to access the API functions based on the JobTitle. -- This does not requires manually configuration, it falls through the follow

4. Advanced solution 2: while adding a user or updating a user's metadata, based on the Job Title, will call Auth0 mangement API to automatically add user to roles which has limited access permission to different API functions.  

******************************************************

D: enhanced feature: (TBD: Based on availablity)

1. Do not use the Authorization Extension ---> Planning use customize rule to handling permission and roles based on user's job Title when creating or updating a user 

2. Enable usage of refresh_token for mobile applications --> planning use silent authenticaiton to handle refresh_token  response_type = code id_token token and allow 
    offline

3. Add your own custom rule (not from a template) that enriches the user profile --> for instance: Add custom claims in the rules

