const { addProduct, editProduct } = require("../models/product");

exports.addProductValidation = (req, res, next) => {
  const result = addProduct.validate(req.body);
  if (result.error)
    return res.status(400).json({ message: result.error.details[0].message });
  else next();
};

exports.editProductValidation = (req, res, next) => {
  const result = editProduct.validate(req.body);
  if (result.error)
    return res.status(400).json({ message: result.error.details[0].message });
  else next();
};
