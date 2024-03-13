const express = require("express");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const bcrypt = require("bcrypt");
const { use } = require("../Router/AutheDefault");

const RefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.REFRESHTOKEN,
    { expiresIn: "360d" }
  );
};

const AccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.ACCSESSTOKEN,
    { expiresIn: "360d" }
  );
};

module.exports = { RefreshToken, AccessToken };
