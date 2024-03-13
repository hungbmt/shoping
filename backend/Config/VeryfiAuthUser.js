const express = require("express");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.ACCSESSTOKEN, (err, user) => {
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid",
          err: err,
        });
      }
      req.user = user;
      next();
    });
  } else {
    return res.json({
      success: false,
      message: "Token not provided",
    });
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin === "true") {
      next();
    } else {
      return res.status(403).json("You are not alowed to do that!");
    }
  });
};
module.exports = { verifyToken, verifyTokenAndAdmin };
