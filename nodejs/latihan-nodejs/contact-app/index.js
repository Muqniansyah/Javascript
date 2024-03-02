// import module menggunakan object destructuring
const { pertanyaan1, pertanyaan2, simpanContacts } = require("./contacts");

// menjalankan fungsi utama
const main = async () => {
  const nama = await pertanyaan1();
  const email = await pertanyaan2();

  simpanContacts(nama, email);
};

main();

// jalankan dengan : node ./index
