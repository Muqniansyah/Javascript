const chalk = require("chalk");

// membuat tulisan warna biru
console.log(chalk.blue("hello world!"));

// membuat background warna biru
console.log(chalk.bgBlue("hello world!"));

// membuat tulisan merah dan backgorund biru
console.log(chalk.red.bgBlue("hello world!"));

// membuat tulisan cetak tebal
console.log(chalk.bold("hello world!"));

// contoh jika disimpan pada variabel
const pesan = "halo muni";
console.log(chalk.bgRed(pesan));

// membuat sebuah kalimat mempunyai perilaku yang berbeda menggunakan template literals javascript
const pesan2 = chalk`{bgGreen lorem} dolor {bgBlue.red sit amet}`;
console.log(pesan2);

// cara jalankan :
// node ./mencoba-package/chalk
