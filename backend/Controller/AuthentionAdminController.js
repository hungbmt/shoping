const express = require("express");
const async = require("async");
const produc = require("../Model/produc");
const Joi = require("joi");
const { schemaValidation } = require("../Config/validationProduc");
const { default: mongoose, Promise } = require("mongoose");
const randomstring = require("randomstring");
const sample = require("../Model/sample");
const upSize = require("../Model/upSize");
const size = require("../Model/size");
const user = require("../Model/authen");
class AuthentionAdminController {
  // create produc, MT:post, /api/v1/create
  async create(req, res, next) {
    try {
      let filesArray = [];
      let tagsArray;
      const item = new produc(req.body);
      item.title;
      item.body;
      item.price;
      item.category;
      item.gender;
      item.postImage = req.files;
      item.tags.forEach((element) => {
        tagsArray = element.split(",");
      });
      // req.files.forEach((element) => {
      //   const file = {
      //     fileName: element.originFileObj,
      //     letfilePath: element.path.substring(7),
      //     fileType: element.mimetype,
      //   };
      //   filesArray.push(file);
      //   file.letfilePath.substring(7);
      // });
      // item.files = filesArray;
      item.tags = tagsArray;
      item.save().then((data) => {
        res.json(data);
      });
      // catch error Duplicate title in MongoDB ==> bắt lổi trùng lặp trong db
      // const isNewTitle = await produc.isTitleInProduc(title);
      // if (!isNewTitle)
      //   return res.json({ success: false, message: "title đã Tồn Tại" });
    } catch (error) {
      // res.status(500).json("error server", error.message);
      console.log(error);
      next(error);
    }
  }
  // update produc size color  MT: put /api/v1/put-color/:producId/
  async sample(req, res) {
    const producId = req.params.producId;
    const codeProductRd = randomstring.generate(7);
    if (!mongoose.Types.ObjectId.isValid(producId)) {
      return res.status(400).send({
        message: "ID blog không hợp lệ",
        data: {},
      });
    }
    await produc.findOne({ _id: producId }).then(async (data) => {
      if (!data) {
        return res.status(400).json({
          message: "lổi sever",
          data: {},
        });
      } else {
        const codeProduct = codeProductRd;
        const sampleImg = req.file.filename;
        const newDocument = new sample({
          producId: producId,
          samplesImg: sampleImg,
          codeProduct,
        });
        let newSample = await newDocument.save();
        await produc.updateOne(
          { _id: producId },
          { $push: { samples_id: newSample._id } }
        );
        res.status(200).json(newSample);
      }
    });
  }

  async updata(req, res) {
    try {
      const productId = req.params.producId;
      const updateData = req.body;
      const updatedUser = await produc.findByIdAndUpdate(
        productId,
        updateData,
        {
          new: true,
        }
      );
      // const datas = await updatedUser.populate("samples_id");
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Error updating user" });
      console.log(error);
    }
  }

  async getUpdataProduc(req, res) {
    const producId = req.params.producId;
    await produc.findById({ _id: producId }).then((data) => {
      return res.status(200).json(data);
    });
  }
  // update corlor  MT: put /api/v1/put-color/:producId/
  async upsize(req, res) {
    const producId = req.params.producId;
    if (!mongoose.Types.ObjectId.isValid(producId)) {
      return res.status(400).json("ID không hợp lệ");
    }
    await produc.findOne({ _id: producId }).then(async (data) => {
      if (!data) {
        return res.staus(402).json("Không Tìm thấy");
      } else {
        const { size, quantity } = req.body;
        const newDocument = new upSize({
          size,
          quantity,
          producId: producId,
        });
        const newupSize = await newDocument.save();
        await produc.updateOne(
          { _id: producId },
          { $push: { upSize: newupSize._id } }
        );
        return res.status(200).json({
          newupSize: newupSize,
        });
      }
    });
  }

  async size(req, res, next) {
    const producId = req.params.producId;
    const id = req.params.id;

    if (
      !mongoose.Types.ObjectId.isValid(producId) ||
      !mongoose.Types.ObjectId.isValid(id)
    ) {
      return res.json("không tìm thấy sản phẩm");
    }
    sample.findOne({ producId: producId, _id: id }).then(async (data) => {
      if (!data) {
        return res.json("không tìm thấy sản phẩm");
        console.log(data);
      } else {
        // Cách  1 lưu ansnc thư viện trong js
        try {
          async.mapLimit(req.body, 10, async (data) => {
            const newData = new size({
              ...data,
              producId: producId,
              sampleId: id,
            });
            await newData.save();
            await sample.updateMany(
              { _id: id },
              { $push: { sizeId: newData._id } }
            );
          });
          res.status(201).json({
            message: "Thành Công",
          });
        } catch (error) {
          next(error);
          res.status(500).json("err sever");
        }
        //  cách 22 lưu bằng vòng loop for...of
        // for (const data of req.body) {
        //   const newSize = new size({
        //     ...data,
        //     producId: producId,
        //     sampleId: id,
        //   });
        //   newSize.save();
        // }
        // return res.status(201).json({
        //   message: "success",
        //   data: req.body,
        //   producId: producId,
        //   sampleId: id,
        // });
      }
    });
  }

  async getImgProduct(req, res) {
    const productId = req.params.productID;
    // const sampleId = req.params.sampleId;
    const id = req.params.id;
    try {
      await sample
        .findOne({ producId: productId, _id: id })
        .select({ codeProduct: 0 })
        .then((data) => {
          if (!data) {
            return res.status(400).json({
              message: "Sản phẩm này không tồn tại",
            });
          } else {
            return res.status(200).json({
              message: "Success",
              data: data,
            });
          }
        });
    } catch (error) {
      return res.status(400).json({
        message: "Sản phẩm này không tồn tại",
      });
    }
  }
  // get all product
  async getProductAll(req, res) {
    const page = req.query.page;
    console.log(page);
    try {
      produc.find().then((data) =>
        res.status(200).json({
          message: "success",
          data: data,
        })
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "err server",
      });
    }
  }
  // get all user
  getAllUser() {
    try {
      user.find().then((data) =>
        res.status(200).json({
          message: "success",
          data: data,
        })
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "error server",
      });
    }
  }
}

module.exports = new AuthentionAdminController();
