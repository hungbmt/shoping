const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const sampleSchema = new Schema(
  {
    samplesImg: { type: String },
    quantity: { type: String },
    codeProduct: { type: String },
    producId: { type: Schema.Types.ObjectId, ref: "produc" },
    sizeId: [{ type: Schema.Types.ObjectId, ref: "size" }], // size
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("sample", sampleSchema);
