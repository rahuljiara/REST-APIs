const ProductModel = require("../models/productModel")

exports.getProduct = async (req, res, next) => {
  // Geting all data from the database using model
  const products = await ProductModel.find();

  res.status(200).json({ products });
}

exports.getProductTesting = async (req, res, next) => {
  // Filtering method to get data base on key:value pair
  // const products = await ProductModel.find({
  //   brand: "Apple",
  //   subCategory: "Smart Watches"
  // });

  // dynamic filtering method using query 
  const products = await ProductModel.find(req.query);
  res.status(200).json({ products });
}