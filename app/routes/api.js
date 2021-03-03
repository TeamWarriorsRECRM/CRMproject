const passport = require("../config/passport");
const db = require("../config/connection");

app.post("/index", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

app.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/index.html");
});
