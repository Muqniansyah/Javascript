const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  // contoh lain yang bisa digunakan oleh response pada express
  res.json({
    nama: "muqniansyah",
    email: "muni@gmail.com",
  });
});

app.get("/contact", (req, res) => {
  // contoh lain yang bisa digunakan oleh response pada express
  // { root: __dirname } bertujuan untuk memberitahukan rootnya berada dimana.
  // dan __dirname atau direktori name yaitu direktori tempat dimana file ini berada(file yang dimaksud yaitu express3.js). jadi memberitahu bahwa rootnya yaitu folder express3.
  res.sendFile("./index.html", { root: __dirname });
});

// contoh untuk mendapatkan id
app.get("/product/:id/category/:idCat", (req, res) => {
  // contoh lain yang bisa digunakan oleh response dan request pada express
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`
  );
});

// contoh mengambil query string
app.get("/Barang/:id", (req, res) => {
  // contoh lain yang bisa digunakan oleh response dan request pada express
  res.send(
    `Barang ID : ${req.params.id} <br> Category : ${req.query.category}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// jalankan dengan
// node ./express3/express3
// http://localhost:3000/ => pada google chrome
// http://localhost:3000/product/1/category/10 => untuk mencoba mendapatkan id lewat browser dengan memakai params/parameter.
// http://localhost:3000/product/1?category=shoes => untuk mencoba mengambil query string lewat browser.
