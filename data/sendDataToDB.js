const env = require("dotenv").config()

const connectDB = require("../config/db");
const ProductModel = require("../models/productModel")

const jsonData = require("./product.json");

// Run this file to connect with db

const start = async () => {
  try {
    await connectDB();
    await ProductModel.create(jsonData)
    console.log("Data Uploaded to DB")
  } catch (error) {
    console.log(error)
  }
}

start()