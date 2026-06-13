const ProductModel = require("../models/productModel")

exports.getProduct = async (req, res, next) => {
  try {

    /* Searching in database */

    // extract all fields from query
    const { brand, isFeatured, category, subCategory, color, name, sort } = req.query;

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

    // Storing data in variable to find all data
    let apiData = ProductModel.find(queryObject);

    // if sort is written in url then only run this 
    if (sort) {
      // replace , with space. because we sort like .sort(x y z ...)
      const fixSort = sort.replaceAll(",", " ");
      queryObject.sort = fixSort;
      console.log("sort =", JSON.stringify(sort));
      console.log("fixSort =", JSON.stringify(fixSort));
      // .sort(x y z ...) will add when user types sort=x,y,z,... else only find()
      apiData = apiData.sort(fixSort);
    }

    // Geting all data from the database with matched query
    const products = await apiData;
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
    // sorting with .sort() method of mongoose ; 1-> ascendeing(asc), -1-> descending(desc)
    // name -> sort in ascending order,  -name -> sort name in descending order
    const products = await ProductModel.find(req.query).sort("-name price");
    res.status(200).json({ products });

  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}