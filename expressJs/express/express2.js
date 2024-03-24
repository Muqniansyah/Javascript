const express = require("express");
const app = express();
const port = 3000;

// contoh method use jika diletakkan dipaling atas
// method ini akan dijalankan untuk request apapun. maka hati-hati jangan letakkan dipaling atas karna request yang lain yang dibawahnya tidak akan berfungsi.
app.use("/", (req, res) => {
  res.send("TEST");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Ini adalah halaman About");
});

app.get("/contact", (req, res) => {
  res.send("Ini adalah halaman Contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// jalankan dengan
// node ./express2
// http://localhost:3000/ => pada google chrome
