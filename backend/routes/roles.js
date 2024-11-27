const express = require("express");
const { verifyToken, roleAuthorization } = require("../middleware/auth");
const router = express.Router();

router.get("/admin", verifyToken, roleAuthorization(["Admin"]), (req, res) => {
  res.json("Welcome Admin");
});

router.get("/moderator", verifyToken, roleAuthorization(["Admin", "Moderator"]), (req, res) => {
  res.json("Welcome Moderator");
});

router.get("/user", verifyToken, (req, res) => {
  res.json("Welcome User");
});

module.exports = router;
