exports.getProduct = async (req, res, next) => {
  res.status(200).json({msg: "Getting all product list"});
}

exports.getProductTesting = async (req, res, next) => {
  res.status(200).json({msg: "Getting all product list for testing"});
}