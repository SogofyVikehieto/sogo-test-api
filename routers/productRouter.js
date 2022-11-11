const router = require("express").Router();
const {
  addProductValidation,
  editProductValidation,
} = require("../middleware/product.validation");
const {
  getProducts,
  addProduct,
  editProduct,
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", addProductValidation, addProduct);
router.put("/", editProductValidation, editProduct);

module.exports = router;
