const ProductModel = require("../models/productModel")

exports.getProduct = async (req, res, next) => {
  try {

    /* Searching in database */

    // extract all fields from query
    const { brand, isFeatured, category, subCategory, color, name, sort, select} = req.query;
    console.log(req.query);

    // Blank object to store the key and value to search
    const queryObject = {}

    // all if will run if field matches and put data into empty object
    if (brand) {
      queryObject.brand = { $regex: brand, $options: 'i' };
    }

    if (category) {
      queryObject.category = { $regex: category, $options: 'i' };
      console.log(queryObject)
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
      // .sort(x y z ...) will add when user types sort=x,y,z,... else only find()
      apiData = apiData.sort(fixSort);
    }

    // implementing select method
    if (select) {
      // replace , with space. because we sort like .sort(x y z ...)
      const fixSelect = select.replaceAll(",", " ");
      queryObject.select = fixSelect;
      // .sort(x y z ...) will add when user types sort=x,y,z,... else only find()
      apiData = apiData.select(fixSelect);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    


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