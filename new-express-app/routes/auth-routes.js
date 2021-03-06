const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.send("Logout");
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  //   res.send(req.user);
  req.login(req.user, (req, res)=>{});
  res.redirect("/profile");
});

module.exports = router;
