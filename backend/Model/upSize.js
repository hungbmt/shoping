const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const upSizeSchema = new Schema(
  {
    size: { type: String },
    quantity: { type: Number },
    producId: { type: Schema.Types.ObjectId, ref: "produc" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("upSize", upSizeSchema);
