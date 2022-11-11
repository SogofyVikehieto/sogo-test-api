const client = require("../services/connectDB");

exports.getProducts = async (req, res) => {
  client
    .query("SELECT * FROM product")
    .then((data) => {
      return res.json({ success: true, message: "success", data: data.rows });
    })
    .catch((err) => {
      return res.sendStatus(500);
    });
};

exports.addProduct = async (req, res) => {
  const { productName, productMrp, productSaleprice, productGstRate } =
    req.body;

  client
    .query(
      `INSERT INTO product (
            product_name, product_mrp, product_saleprice, product_gstrate)
            VALUES(
              $1, $2, $3, $4
            )
            RETURNING *;`,
      [productName, productMrp, productSaleprice, productGstRate]
    )
    .then((data) => {
      return res.status(201).json({
        success: true,
        message: "Added successfully!",
        data: data.rows[0],
      });
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(500);
    });
};

exports.editProduct = async (req, res) => {
  const { id, productName, productMrp, productSaleprice, productGstRate } =
    req.body;

  client
    .query(
      `UPDATE product SET 
      product_name=$1, product_mrp=$2, product_saleprice=$3, product_gstrate=$4
      WHERE id=$5
      RETURNING *;`,
      [productName, productMrp, productSaleprice, productGstRate, id]
    )
    .then((data) => {
      if (data.rowCount === 0)
        return res.status(400).json({
          success: false,
          message: "Product with this id was not found",
        });
      else
        return res.status(200).json({
          success: true,
          message: "Updated successfully!",
          data: data.rows[0],
        });
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(500);
    });
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  client
    .query(`    SELECT * FROM product WHERE id=$1;  `, [id])
    .then((data) => {
      if (data.rowCount === 0)
        return res.status(400).json({
          success: false,
          message: "Product with this id does not exist",
        });
      else
        return res.json({
          success: true,
          message: "success",
          data: data.rows[0],
        });
    })
    .catch((err) => {
      return res.sendStatus(500);
    });
};
