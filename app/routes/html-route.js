// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const isAuth = require("../config/middleware/isAuth");

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

  app.get("/database", isAuth, function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/database.html"));
  });
};
