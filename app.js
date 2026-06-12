const express = require('express')

const productRouter = require('./routes/productRouter')

const app = express();
const PORT = process.env.PORT || 3000;

// seting api at - /api/products to get json data
app.use("/api/products", productRouter)

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started at - http://localhost:${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}


startServer();