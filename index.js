const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const productRouter = require("./routers/productRouter");
const dbClient = require("./services/connectDB");
const createTable = require("./services/createTables");

const PORT = process.env.PORT;

dbClient
  .connect()
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err));

createTable();

const app = express();

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log(`app running and listening on port: ${PORT}`);
});
