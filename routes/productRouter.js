const express = require('express');
const productController = require("../controller/productController");

const productRouter = express.Router();

productRouter.get("/", productController.getProduct);

// Access via - http://localhost:3000/api/products/testing/
productRouter.get("/testing", productController.getProductTesting);

module.exports = productRouter;