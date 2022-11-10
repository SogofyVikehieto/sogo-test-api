const router = require("express").Router();
const {
  getProducts,
  addProduct,
  editProduct,
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", addProduct);
router.put("/", editProduct);

module.exports = router;
