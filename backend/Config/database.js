const express = require("express");
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/shoping", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect database Success");
  } catch (error) {
    console.log("connect database fault");
  }
}

module.exports = { connect };
