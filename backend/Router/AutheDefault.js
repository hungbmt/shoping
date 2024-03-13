const express = require("express");
const router = express.Router();

const AuthentionDfController = require("./../Controller/AuthentionDfController");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../Config/VeryfiAuthUser");

// router.post(
//   "/add-to-cart/",
//   verifyTokenAndAdmin,
//   AuthentionDfController.addcart
// );

router.post(
  "/add-to-cart/",
  verifyTokenAndAdmin,
  AuthentionDfController.cartsst
);

module.exports = router;
