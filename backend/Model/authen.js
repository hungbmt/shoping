const express = require("express");
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const { Schema } = mongoose;

const AuthSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    isAdmin: { type: String },
    active: { type: Boolean, default: true },
    avatar: { type: String },
    card: { type: Schema.Types.ObjectId, ref: "addCard" },
  },
  {
    timestamps: true,
  }
);
AuthSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("auth", AuthSchema);
