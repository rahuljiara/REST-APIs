const ProductModel = require("../models/productModel")

exports.getProduct = async (req, res, next) => {
  try {

    /* Searching in database */

    // extract all fields from query
    const { brand, isFeatured, category, subCategory, color, name } = req.query;

    // Blank object to store the key and value to search
    const queryObject = {}

    // all if will run if field matches and put data into empty object
    if (brand) {
      queryObject.brand = { $regex: brand, $options: 'i' };
    }

    if (category) {
      queryObject.category = { $regex: category, $options: 'i' };
    }

    if (subCategory) {
      queryObject.subCategory = { $regex: subCategory, $options: 'i' };
    }

    // by writing isFeatured it will considered true (==="true" makes boolean)
    if (isFeatured) {
      queryObject.isFeatured = isFeatured === "true";
    }

    if (color) {
      queryObject["attributes.color"] = { $regex: color, $options: 'i' };
      console.log(queryObject);
    }

    if (name) {
      queryObject.name = { $regex: name, $options: 'i' };
    }



    // Geting all data from the database with matched query
    const products = await ProductModel.find(queryObject);
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.getProductTesting = async (req, res, next) => {
  try {
    // Filtering method to get data base on key:value pair

    /* 
      const products = await ProductModel.find({
      brand: "Apple",
      subCategory: "Smart Watches"
    });
  
    */
    // dynamic filtering method using query 
    const products = await ProductModel.find(req.query);
    res.status(200).json({ products });

  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}