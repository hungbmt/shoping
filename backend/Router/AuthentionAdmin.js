const express = require("express");
const path = require("path");

const router = express.Router();
const multer = require("multer");
const randomstring = require("randomstring");
const AuthentionController = require("../Controller/AuthentionAdminController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../Config/VeryfiAuthUser");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/imgProduc");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, randomstring.generate(7) + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = new RegExp("jpg|jpeg|png|gir");
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("I don't have a clue!"));
    }
  },
});

router.post(
  "/create",
  verifyTokenAndAdmin,
  upload.array("postImage", 6),
  AuthentionController.create
);
router.put(
  "/update/:producId",
  verifyTokenAndAdmin,
  AuthentionController.updata
);
router.get(
  "/update/:producId",
  verifyTokenAndAdmin,
  AuthentionController.getUpdataProduc
);

// router.put("/put-size/:producId/", AuthentionController.upsize);

router.put(
  "/size/:producId/:id",
  verifyTokenAndAdmin,
  AuthentionController.size
);
router.get(
  "/size/:productID/:id/getAll",
  verifyTokenAndAdmin,
  AuthentionController.getImgProduct
);

router.put(
  "/updata-product/:producId/",
  verifyTokenAndAdmin,
  upload.single("samplesImg"),
  AuthentionController.sample
);
router.get(
  "/product/all",
  verifyTokenAndAdmin,
  AuthentionController.getProductAll
);
router.get("/user/all", verifyTokenAndAdmin, AuthentionController.getAllUser);
module.exports = router;
