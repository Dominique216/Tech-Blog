
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Tech-Blog
## Description 
This application is a Fullstack Tech Blog with a frontend made using Handlebars, Bootstrap, and Javascript and a backend made using a mySQL database, RESTful api routes and a server. Upon opening the app, it can be used to view posts and comments on the homepage. Once logged in, the user can add comments or go to the dashboard to view, update, or delete thier own posts.
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
## Installation
To install on locally:
1. Copy the SSH key from the Repo into a folder on your own computer
2. Once the files are installed, open the folder in your personal workspace
3. For this application you will need to install bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, and sequelize to the package.json file.
4. Once the dependencies are install, open the integrated terminal on server.js and if you want to seed some data proir to use, run node seeds/seed.js.
5. Whether you seeded the databse or not, in the server.js integrated terminal, run node server.js and now you can view the website on the local host address.
## Usage

Visit the deployed Heroku page [here](https://tech-blog-014.herokuapp.com/)

Upon visiting the site for the first time, the user can view posts and comments. They can also see the top nav-bar links.

If the user tries to add an comment or navigate to the dashboard, the login page will be rendered instead.

If the user has not created an account on this site, they can click the sign up button on the bottom of the login form to create thier account.

Once logged in, they can now add comments to posts by clicking the add comment button. 

If the dashboard option is pressed, the user can add a new post by clicking add the add post button, or update an exising post they made by clicking on the post title.

The user can logout from choosing the logout option on the nav-bar.

## License
This project uses an MIT license. For more information click the license badge at the top of the README.
