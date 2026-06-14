require("dotenv").config();
const express = require('express')
const connectDB = require("./config/db")

const productRouter = require('./routes/productRouter')

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/products", productRouter)

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started at PORT: ${PORT}`);
    })
  } catch (error) {
    console.log("Error while connecting to database:", error.message);
  }
}


startServer();