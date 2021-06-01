require("dotenv").config();

var express = require("express");
var app = express();
const port = process.env.PORT || 4000;
const message = process.env.MESSAGE;

app.get("/test", (req, res) => {
  res.send(`Worldss! ${message}`);
});

app.listen(port, () => {
  console.log("server ok");
});
