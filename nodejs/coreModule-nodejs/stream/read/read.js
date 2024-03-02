const fs = require("fs");

// Membuat Read Stream dengan createReadStream.
const readStream = fs.createReadStream("./stream/read/test.txt", "utf8");

// Mengatur event 'data' untuk Read Stream atau untuk menangani data yang dibaca.
readStream.on("data", (chunk) => {
  console.log("Membaca data:", chunk);
});

// Mengatur event 'end' untuk Read Stream atau untuk menangani saat proses membaca selesai.
readStream.on("end", () => {
  console.log("Proses membaca selesai.");
});

// Mengatur event 'error' untuk menangani kesalahan pada stream.
readStream.on("error", (err) => {
  console.error(`Error membaca file: ${err.message}`);
});

// jalankan dengan : node ./stream/read/read
