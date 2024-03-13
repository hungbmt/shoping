const express = require("express");
const router = express.Router();

const CreateAuthController = require("./../Controller/CreateAuthController");
router.post("/register", CreateAuthController.ApiRegister);
router.post("/login", CreateAuthController.ApiLogin);
router.post("/refeshtoken", CreateAuthController.refeshToken);
router.post("/logout", CreateAuthController.ApiLogOut);

module.exports = router;
