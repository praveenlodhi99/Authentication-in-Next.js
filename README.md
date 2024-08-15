---------------------------------------------------- PROJECT SETUP ---------------------------------------------------- 

1. Course Playlist - Authentication in Next.js
    - https://youtube.com/playlist?list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE&si=4VlHGhaMbTrAdfiS

2. Setup MongoDB

    - create 'project'

    - Go to Database -> create 'cluster'
        - give name to 'cluster'
        - select nearest 'region'

    - Go to Security -> 'Network Access' -> to allow all IP Address to connect with database -> 0.0.0.0/0 

    - Go to Security -> 'Database Access' -> Add new Database user
        - give 'username'
        - give 'password', avoid special characters in password, can create problem, should not be URL encoded.
        - Select 'Built-in-Role': Read & write to any database
        - add user

    - conect to cluster -> Go to 'cluster'
        - select 'connect'
        - choose 'mongoDB Compass'
        - copy the 'connection string'
        - paste in '.env' file of project

3. Installing dependencies for the project
    - npm i axios bcryptjs jsonwebtoken nodemailer react-hot-toast mongoose

    - Function of each dependencies:

        - axios: 
            - A popular JavaScript library used to make HTTP requests from both the browser and Node.js. It's commonly used for communicating with APIs, handling requests, and managing responses.
        
        - bcryptjs:
            - A library for hashing passwords. It provides a way to securely hash and compare passwords, which is essential for authentication in applications.

        - jsonwebtoken:
            - A library used to create, sign, and verify JSON Web Tokens (JWT). JWTs are commonly used for securely transmitting information between parties, often for authentication and authorization purposes.

        - nodemailer:
            - A module that allows you to send emails from Node.js applications. It's often used for sending verification emails, password reset emails, and other notifications.

        - react-hot-toast:
            - A lightweight, customizable toast notification library for React. It provides a simple way to display feedback messages to users, such as success or error notifications.

        - mongoose:
            - An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model data and manage MongoDB collections with ease, allowing you to interact with your database in a more structured way.

4.