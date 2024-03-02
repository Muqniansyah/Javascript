// import module
const contacts = require("./contacts");

// menjalankan fungsi utama
const main = async () => {
  const nama = await contacts.tulisPertanyaan("Masukkan nama anda : ");
  const email = await contacts.tulisPertanyaan("Masukkan email anda : ");
  const noHP = await contacts.tulisPertanyaan("Masukkan No HP anda : ");

  contacts.simpanContact(nama, email, noHP);
};

main();

// jalankan dengan : node ./index
