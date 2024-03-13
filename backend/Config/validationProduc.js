const express = require("express");
const Joi = require("joi");

const schemaValidation = Joi.object({
  title: Joi.string(),
  body: Joi.string(),
  price: Joi.number(),
  quantity: Joi.number(),
});

module.exports = { schemaValidation };
