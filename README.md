
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
<img width="1434" alt="tech-blogsc1" src="https://user-images.githubusercontent.com/117382111/220492785-c246ae63-bc54-442e-b1a6-f3250c38003e.png">

If the user tries to add an comment or navigate to the dashboard, the login page will be rendered instead.

If the user has not created an account on this site, they can click the sign up button on the bottom of the login form to create thier account.
<img width="1426" alt="tech-blogsc1 5" src="https://user-images.githubusercontent.com/117382111/220492897-5d81793d-653e-41a5-a84e-b036814d4c69.png">

Once logged in, the login link on the nav-bar is replaced with a logout option and the user can now add comments to posts by clicking the add comment button.
<img width="1427" alt="tech-blogsc2" src="https://user-images.githubusercontent.com/117382111/220492913-733cba76-b051-4795-b83c-09cdcd44a39d.png">
<img width="1424" alt="tech-blogscc3" src="https://user-images.githubusercontent.com/117382111/220492942-89243f9a-b168-4efd-8890-761ddfcf022e.png">


If the dashboard option is pressed, the user can add a new post by clicking add the add post button, or update an exising post they made by clicking on the post title.
<img width="1395" alt="tech-blogsc4" src="https://user-images.githubusercontent.com/117382111/220492979-487dc44e-58d3-4fb9-983f-a209a0716599.png">
<img width="1401" alt="tech-blogsc5" src="https://user-images.githubusercontent.com/117382111/220492986-366ff7d2-0559-4898-8b9e-f845cbbf389b.png">
<img width="1387" alt="tech-blogsc6" src="https://user-images.githubusercontent.com/117382111/220492990-04e31f61-cdfe-4038-ac9f-0f21a44ef8e6.png">

If the user is idle for too long, they will be logged out automatically.

## License
This project uses an MIT license. For more information click the license badge at the top of the README.
