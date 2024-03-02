const fs = require("fs");

// Membuat Write Stream dengan createWriteStream.
const writeStream = fs.createWriteStream("./stream/write/output.txt");

// Menulis data ke Write Stream menggunakan metode write.
writeStream.write("Hello, ini adalah contoh write stream.");

// Mengakhiri Write Stream menggunakan metode end.
writeStream.end();

// Mengatur event 'finish' untuk Write Stream atau untuk menangani saat proses menulis selesai.
writeStream.on("finish", () => {
  console.log("Proses menulis selesai.");
});

// Mengatur event 'error' untuk menangani kesalahan pada stream.
writeStream.on("error", (err) => {
  console.error(`Error menulis file: ${err.message}`);
});

// jalankan dengan : node ./stream/write/write
