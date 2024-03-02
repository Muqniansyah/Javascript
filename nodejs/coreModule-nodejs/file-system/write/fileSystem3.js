const fs = require("fs");

// menuliskan string ke file secara asynchronous
fs.writeFile(
  "./file-system/write/test.txt",
  "hello world secara Asynchronous!",
  (error) => {
    console.log(error);
  }
);

// jalankan dengan : node ./file-system/write/fileSystem3
// maka nanti akan muncul file test.txt beserta pesannya jika belum ada file test.txt.
// namun jika file test.txt sudah ada maka akan ditimpa pesannya.
