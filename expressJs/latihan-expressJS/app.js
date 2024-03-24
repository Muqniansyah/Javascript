const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
  deleteContact,
  updateContacts,
} = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// third-party middleware
app.use(expressLayouts);

// built-in middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

app.get("/", (req, res) => {
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
  const contacts = loadContact();
  console.log(contacts);

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts: contacts,
    message: req.flash("message"),
  });
});

// Halaman Form tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    layout: "layouts/main-layout",
    title: "Form Tambah Data Contact",
  });
});

// proses data contact
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);
      if (duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("nohp", "No HP tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    // cek apakah ada error pada email
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        layout: "layouts/main-layout",
        title: "Form Tambah Data Contact",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      // kirimkan flash message
      req.flash("message", "Data contact berhasil ditambahkan!");
      // melakukan redirect atau kembali kehalaman sebelumnya yaitu halaman contact yang method get.
      res.redirect("/contact");
    }
  }
);

// proses delete contact
app.get("/contact/delete/:nama", (req, res) => {
  // ambil contact
  const contact = findContact(req.params.nama);

  // jika contact tidak ada
  if (!contact) {
    res.status(404);
    res.end("<h1>404</h1>");
  } else {
    deleteContact(req.params.nama);
    // kirimkan flash message
    req.flash("message", "Data contact berhasil dihapus!");
    res.redirect("/contact");
  }
});

// Halaman Form ubah data contact
app.get("/contact/edit/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("edit-contact", {
    layout: "layouts/main-layout",
    title: "Form Ubah Data Contact",
    contact: contact,
  });
});

// proses ubah data
app.post(
  "/contact/update",
  [
    body("nama").custom((value, { req }) => {
      const duplikat = cekDuplikat(value);
      // pengecekan jika nama yang dikirimkan tidak sama dengan nama lamanya dan untuk nama yang duplikat atau nama yang sudah ada di contacts.json.
      // jadi jika nama yang baru yang dikirim ke dalam value itu sama dengan nama lamanya maka ia akan lolos.
      // namun untuk melakukan itu kita harus kirim juga objek request yaitu {req} sebagai parameter didalam validasinya. supaya ada akses ke objek req sehingga bisa menggunakan req.body.oldNama.
      if (value !== req.body.oldNama && duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("nohp", "No HP tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    // cek apakah ada error pada email
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("edit-contact", {
        layout: "layouts/main-layout",
        title: "Form Ubah Data Contact",
        errors: errors.array(),
        contact: req.body,
      });
    } else {
      updateContacts(req.body);
      // kirimkan flash message
      req.flash("message", "Data contact berhasil diubah!");
      // melakukan redirect atau kembali kehalaman sebelumnya yaitu halaman contact yang method get.
      res.redirect("/contact");
    }
  }
);

// Halaman detail contact
// jika kita menuliskan setelah slash(/) kita berikan titik dua (:) pada contoh "/contact/:nama" maka routenya ia akan menangkap apapun setelah tanda slash(/).
// jika ingin membuat route baru maka pastikan route itu ditulis sebelum route yang ini yaitu route dimana setelah slash(/) ada titik dua (:). karna jika ditulis sesudahnya maka tidak akan pernah bisa diakses.
// dan perlu diingat ini hanya berlaku jika memakai method get lagi atau method lain yang sama lagi.
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama); // fungsi findContact() akan menerima nama (/:nama) yang ditulis sebagai parameter/params.

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact: contact,
  });
});

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
