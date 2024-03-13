const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const addCartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "auth" },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, res: "produc" },
        title: { type: String },
        quantity: { type: Number, default: 1 },
        codeProduct: { type: String },
        maSize: { type: String },
        imgProduct: { type: String },
        price: Number,
        seler: Number,
        total: {
          type: Number,
        },
      },
    ],
    active: { type: Boolean, default: false },
    time: { type: Date, default: Date.now, index: { expires: 1200 } }, // xóa dự liệu trong vòng 2 phút
  },
  { timestamps: true }
);

module.exports = mongoose.model("addCart", addCartSchema);
