const express = require('express');
const productController = require("../controller/productController");

const productRouter = express.Router();

productRouter.get("/", productController.getProduct);

module.exports = productRouter;