// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const isAuth = require("../config/middleware/isAuth");
const express = require("express");
const session = require("express-session");
const app = express();
// Requiring our custom middleware for checking if a user is logged in

module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/database");
    }
    res.sendFile(path.join(__dirname, "../../public/register.html"));
  });

  app.get("/index", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/database.html");
    }
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.

  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  app.get("/logout", function (req, res) {
    req.logout();
    console.log("redirecting server side");
    res.redirect("/");
  });


app.get("/database", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/database.html"));
});

// app.get("/contact-us", function (req, res) {
//   res.sendFile(path.join(__dirname, "../../public/contact-us.html"));
// });

app.get("/contact-us", function (req, res) {
  console.log('this works')
  res.sendFile(path.join(__dirname, "../../public/contact-us.html"));
});


app.get("/addClient", function (req, res){
  console.log('redirecting to add client')
  res.sendFile(path.join(__dirname, "../../public/addClient.html"));
})

app.get("/clients", function(req,res){
  console.log('redirecting to clients quick view')
  res.sendFile(path.join(__dirname, "../../public/clients.html"));
})

app.get("/thankyou", function(req,res){
  console.log('redirecting to contact us page unauthenicated')
  res.sendFile(path.join(__dirname, "../../public/thankyou.html"));

})

};
