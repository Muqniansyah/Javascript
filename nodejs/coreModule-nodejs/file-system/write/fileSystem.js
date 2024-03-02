// core module
// file system

const fs = require("fs");

// menuliskan string ke file secara synchronous
fs.writeFileSync(
  "./file-system/write/test.txt",
  "hello world secara synchronous!"
);

// jalankan dengan : node ./file-system/write/fileSystem
// maka nanti akan muncul file test.txt beserta pesannya jika belum ada file test.txt.
// namun jika file test.txt sudah ada maka akan ditimpa pesannya.
