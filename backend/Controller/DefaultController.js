const express = require("express");
const producs = require("../Model/produc");
const { jwtDecode } = require("jwt-decode");
class DefaultController {
  async getAll(req, res, next) {
    const { RefreshTokens } = req.cookies;
    let decoded = null;

    try {
      // ======>>>>>> find all
      const productAll = await producs.find().populate("samples_id").limit(8);
      //=====>>>>>>>>>>> find bestSeller
      // $exists kiểm tra xem có bestSeller có hay không nếu không trat fault
      const bestSeller = await producs
        .find({ bestSeller: { $exists: true, $gt: 0 } })
        .populate("samples_id")
        .limit(8);

      // handle accsetoken khong co
      if (RefreshTokens) {
        decoded = await jwtDecode(RefreshTokens);
      } else {
        next();
      }
      res.status(200).json({
        bestSeller,
        productAll,
        RefreshTokens: RefreshTokens,
        decoded,
      });
    } catch (error) {
      next();
    }
  }
  async subpages(req, res) {
    const slug_1 = req.params.slug_1;
    const slug_2 = req.params.slug_2;
    const slug_3 = req.params.slug_3;
    const sttProduct = req.params.sttProduct;
    const codeProduct = req.params.codeproduct;
    try {
      const data = await producs
        .findOne({
          slug_2: slug_2,
          slug_1: slug_1,
          slug_3: slug_3,
          sttProduct: sttProduct,
        })
        .populate("samples_id");
      if (data) {
        const codeProducts = data.samples_id.find(
          (sample) => sample.codeProduct === codeProduct
        );
        if (codeProducts) {
          await codeProducts.populate("sizeId");
        }

        res.json({
          data: data,
          codeProducts: codeProducts,
        });
      } else {
        res.status(404).json({ error: "Data not found" });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new DefaultController();
