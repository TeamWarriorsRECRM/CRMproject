# About 
A mobile responsive website aimed to assist real estate agents with organizing their clients and sales leads. Real estate agents can now efficiently create and update their client information and can contact their clients all on one website. After logging in, the real estate agent will be shown a quick overview of all their clients with the option of emailing them as well. To update, create or view their clients' information, the user will be prompted to the main client database. This database will show all client information in detail and the user can update their cleint's information on the same page as well. Finally, if the real estate agent is in need of support, the user can select the contact us tab, which will direct them to contacting customer support directly. 

## Installation
To run this website effectively, the following packages would be required:
- Express
- Passport
- Sequelize
- (etc)

### Create Database
The user will also need to use Mysql Workbench and copy and run each document in it.

### Configure .env
Create/use the .env file and put in these elements
DB_NAME=(db-name)
DB_USER=(db-user)
DB_PWD=(db-password)

## Run Locall
The user will need to run a node server.js locally and will need to open the browser to http://localhost:8080

## Deployment to Heroku
The user will need to configure environmental variables for the .env above to correspond to the Database.

## Stylistic Notes
This code has been written towards keeping it clean and simple, yet self-explanatory.

It has also been written in a style to sheppard us into the style used in React, 
hence the onClick listeners embedded in the HTML.

We try to use ES6 async functions for clean handling of asyncronous functions.

We serve RESTful API calls on the backend, as is good modern programming practice.

Finally we illustrate how npm packages can be used on the server and client side (moment.js)

Enjoy! Feel free to use this as a template towards your next project!