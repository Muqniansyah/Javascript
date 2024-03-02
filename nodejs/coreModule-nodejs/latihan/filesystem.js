//membuat program JavaScript yang dapat membaca teks dari berkas .txt

// TODO: tampilkan teks pada notes.txt pada console.
const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

// dengan menggunakan filesystem
fs.readFile("./latihan/notes.txt", "UTF-8", fileReadCallback);

// output dijalankan dgn perintah :
// node ./latihan/filesystem
