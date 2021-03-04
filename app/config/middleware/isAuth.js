module.exports = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.redirect("/login");
  }
};
