const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const SizeSchema = new Schema(
  {
    masize: { type: String },
    quantity: { type: String },
    producId: { type: Schema.Types.ObjectId, ref: "produc" },
    sampleId: [{ type: Schema.Types.ObjectId, ref: "sample" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("size", SizeSchema);
