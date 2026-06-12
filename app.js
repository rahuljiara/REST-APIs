const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  res.send("Server Started!");
})

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