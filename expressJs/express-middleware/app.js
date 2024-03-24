const express = require("express");
// express layouts hanya digunakan untuk memudahkan pemakaian ejs saja.
const expressLayouts = require("express-ejs-layouts");
// morgan digunakan untuk menuliskan log kedalam console.
const morgan = require("morgan");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// third-party middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// built-in middleware
app.use(express.static("public"));

// application level middleware
app.use((request, response, next) => {
  console.log("Time : ", Date.now());
  // next bertujuan agar setelah middleware ini dijalankan, express akan langsung bergerak pindah ke middleware berikutnya.
  // dan next ini harus dituliskan. karna jika tidak aplikasinya atau webnya akan menjadi live hanging atau error load.
  next();
});

// contoh middleware bisa dibuat lebih dari satu
// dan hati" menyimpannya karna middleware itu dibaca dari atas kebawah.
app.use((request, response, next) => {
  console.log("ini middleware ke-2");
  next();
});

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
    layout: "layouts/main-layout",
    title: "view engine",
    mahasiswa: mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
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

// method use untuk menjalankan sebuah middleware.
// method ini akan dijalankan untuk request apapun. maka hati-hati jangan letakkan dipaling atas karna request yang lain yang dibawahnya tidak akan berfungsi.
app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// jalankan dengan
// node ./app
// http://localhost:3000/ => pada google chrome
// http://localhost:3000/product/1/category/10 => untuk mencoba mendapatkan id lewat browser dengan memakai params/parameter.
// http://localhost:3000/product/1?category=shoes => untuk mencoba mengambil query string lewat browser.
