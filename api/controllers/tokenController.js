const { User } = require("../models");
const express = require("express");
const jwt = require("jsonwebtoken");

async function getToken(req, res) {
  const user = await User.findAll({ where: { email: req.body.email } });

  const token = jwt.sign(
    {
      email: user[0].email,
      password: user[0].password,
    },
    process.env.TOKEN_SECRET,
    (token) => {
      res.json({ token });
    },
  );
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
