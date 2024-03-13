const express = require("express");
const RouterAuthAdmin = require("./AuthentionAdmin");
const RouterCreateAuth = require("./CreateAuth");
const RouterAuthDf = require("./AutheDefault");
const RouterDefault = require("./RouterDefault");

function router(app) {
  app.use("/api/v1", RouterAuthAdmin);
  app.use("/api/v2/auth", RouterCreateAuth);
  app.use("/api/v3", RouterAuthDf);
  app.use("/api/v4", RouterDefault);
}

module.exports = router;
