10/4
    - base wireframe built up.

10/5
    - built up first draft design through Adobe XD.
    - worked through steps of what we will need to link through and/or scrap.
        * concept creation for the overall site, including Client/Recruiter UX/UI layout.

10/7
    - Built Angular boiler plate for site.
    - Set up Github repo for the group.
        -split Server and Client
    - applied for Glassdoor API as a backup to Indeed (should have a response by 10/10).
    - Wrapping up base UX/UI layout.
    - favicon updated on index.html
    - boilerplate for Node server.
        *included dependencies:
            -bcryptjs
            -dotenv
            -express
            -jsonwebtoken
            -pg
            -sequelize
            -nodemon

10/8
    - Backend build
        -models
            -Admin
            -Client - split user/logs
            -Recruiter - split user/logs  (mod) - changed Get/Put/Delete from username to ID
        -controllers
            -ClientController - signup/signin
            -RecruiterController - signup/signin
            -AdminController - signup/signin
            -RecruiterLogController - CRUD
            -ClientLogController - CRUD
                ***HOW DO I MAKE IT WHERE AN ADMIN CAN ACCESS BOTH LOG CONTROLLERS?
        -middleware
            -header.js
            -validate-session.js
        -app.js 
        -db.js 
        -for image: https://blog.couchbase.com/creating-user-profile-store-with-node-js-nosql-database/
        -Tested Sign-up & Login for Recruiter, Admin & Clients 
            *all passed.

10/9
    - Reset backend to combine Client/Rec/Admin for login/Signup purposes.
        *going to utilize role verification on the frontend to allow varied information to display depending on the role.
    - All endpoints SUCCESS!  Ready for frontend Dev!

10/10
    - Issues with Firebase in deploying the backend.  Switched to Heroku for backend deployment.  All builds deployed, tested and passed through Postman.  Pushed to Github for everyone to access and utilize.

10/11
    - Morning standup to walk through design layout and proceedure for each of us.  Aiming at search functionality for Recruiter (client).  *need to consider how the information is fetched.

10/13
    - Worked through a routing tutorial.

10/14
    - Trying to put in the routing features within our project.  Using https://angular.io/guide/router as a guide.