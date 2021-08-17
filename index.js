const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(req.query);
})

app.listen(port, () => {
  console.log(`URL display listening at http://localhost:${port}`)
})