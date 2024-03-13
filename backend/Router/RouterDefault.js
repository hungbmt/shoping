const express = require("express");
const router = express.Router();

const defaultController = require("../Controller/DefaultController");

router.get("/all", defaultController.getAll);
router.get(
  "/subpage/:slug_2/:slug_1/:slug_3/:sttProduct/:codeproduct?",
  defaultController.subpages
);

module.exports = router;
