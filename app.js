require('dotenv').config()
const express = require('express');
const app = express();
const basePath = process.env.BASE_PATH;

app.get(basePath, (req, res) => {
  res.send(`Hello World!`);
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
