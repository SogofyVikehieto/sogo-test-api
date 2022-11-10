const client = require("../services/connectDB");

const createTable = () => {
  client.query(
    `CREATE TABLE IF NOT EXISTS product(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_mrp DECIMAL(10, 2) NOT NULL,
    product_saleprice DECIMAL(10, 2) NOT NULL,
    product_gstrate VARCHAR(10) NOT NULL
  );`,
    (err, res) => {
      // ...
    }
  );
};

module.exports = createTable;
