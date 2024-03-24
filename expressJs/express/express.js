const express = require("express");
const app = express();
const port = 3000;

// melakukan route ketika ada request secara method get.
// cara baca : ketika kita menjalankan appnya lalu saat ada request method get kehalaman root / halaman utama, maka jalankan fungsi berikut ini.
app.get("/", (req, res) => {
  // kirim response yang berupa hello world!.
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Ini adalah halaman About");
});

app.get("/contact", (req, res) => {
  res.send("Ini adalah halaman Contact");
});

// method use untuk menjalankan sebuah middleware.
// method ini akan dijalankan untuk request apapun. maka hati-hati jangan letakkan dipaling atas karna request yang lain yang dibawahnya tidak akan berfungsi.
app.use("/", (req, res) => {
  // res.status(404) => untuk membuat status code menjadi 404
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// jalankan dengan
// node ./express
// atau bisa dengan bantuan nodemon => npm run nodemon
// http://localhost:3000/ => pada google chrome
