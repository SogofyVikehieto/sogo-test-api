const Joi = require("@hapi/joi");

const schema = {
  addProduct: Joi.object({
    productName: Joi.string().required(),
    productMrp: Joi.number().max(99999999).positive().precision(2).required(),
    productSaleprice: Joi.number()
      .max(99999999)
      .positive()
      .precision(2)
      .required(),
    productGstRate: Joi.string().max(10).required(),
  }),
  editProduct: Joi.object({
    id: Joi.number().integer().required(),
    productName: Joi.string().required(),
    productMrp: Joi.number().max(99999999).positive().precision(2).required(),
    productSaleprice: Joi.number()
      .max(99999999)
      .positive()
      .precision(2)
      .required(),
    productGstRate: Joi.string().max(10).required(),
  }),
};

module.exports = schema;
