const { User } = require("../models");
const express = require("express");
const jwt = require("jsonwebtoken");

async function getToken(req, res) {
  const user = await User.findAll({ where: { email: req.body.email } });

  jwt.sign({ user: user[0] }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
    res.json({ token: token });
  });
  res.json({ token: token });
}

// middle
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).json({ message: "Invalid Token" });
  }
}

module.exports = {
  getToken,
  verifyToken,
};
