// membaca isi file secara synchronous
const fs = require("fs");

const data = fs.readFileSync("./file-system/read/test.txt", "utf-8");
console.log(data);

// jalankan dengan : node ./file-system/read/synchronous
// utf-8 yaitu encoding untuk bisa merubah dari buffer jadi huruf latin.
// atau bisa menggunakan toString() untuk merubah buffer jadi string. karna jika tidak dirubah jadi string maka akan menampilkan buffer sebagai hasilnya.
