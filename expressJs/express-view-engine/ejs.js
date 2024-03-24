const express = require("express");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // membuat data mahasiswa sebagai contoh memakai ejs jika datanya banyak
  const mahasiswa = [
    {
      nama: "Muqniansyah",
      email: "muni@gmail.co",
    },
    {
      nama: "bimo",
      email: "bimo@gmail.co",
    },
    {
      nama: "brian",
      email: "brian@gmail.co",
    },
  ];
  res.render("index", {
    sapaan: "good morning",
    title: "view engine",
    mahasiswa: mahasiswa,
  });
});

app.get("/about", (req, res) => {
  // cara jalankan dengan ejs atau memanggil viewsnya menggunakan render().
  res.render("about", { title: "Halaman About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Halaman Contact" });
});

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`
  );
});

app.get("/Barang/:id", (req, res) => {
  res.send(
    `Barang ID : ${req.params.id} <br> Category : ${req.query.category}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// jalankan dengan
// node ./ejs
// http://localhost:3000/ => pada google chrome
// http://localhost:3000/product/1/category/10 => untuk mencoba mendapatkan id lewat browser dengan memakai params/parameter.
// http://localhost:3000/product/1?category=shoes => untuk mencoba mengambil query string lewat browser.
