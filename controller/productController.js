const ProductModel = require("../models/productModel")

exports.getProduct = async (req, res, next) => {
  try {
    const { brand, isFeatured, category, subCategory, color, name, sort, select, page, limit } = req.query;
    console.log(req.query);
    const queryObject = {}

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

    if (isFeatured) {
      queryObject.isFeatured = isFeatured === "true";
    }

    if (color) {
      queryObject["attributes.color"] = { $regex: color, $options: 'i' };
    }

    if (name) {
      queryObject.name = { $regex: name, $options: 'i' };
    }

    let apiData = ProductModel.find(queryObject);

    if (sort) {
      const fixSort = sort.replaceAll(",", " ");
      queryObject.sort = fixSort;
      apiData = apiData.sort(fixSort);
    }

    if (select) {
      const fixSelect = select.replaceAll(",", " ");
      queryObject.select = fixSelect;
      apiData = apiData.select(fixSelect);
    }

    page = Number(page) || 1;
    limit = Number(limit) || 5;
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit)
    const products = await apiData;

    res.status(200).json({ products });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}