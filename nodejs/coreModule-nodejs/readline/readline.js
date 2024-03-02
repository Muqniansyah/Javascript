const readline = require("readline");

// buat interface input dan output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda : ", (nama) => {
  console.log(`Terimakasih ${nama}`);
  rl.close();
});

// jalankan dengan : node ./readline/readline
