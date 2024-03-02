const fs = require("fs");

// menuliskan string ke file secara synchronous
// contoh disini kita menangani errornya juga
try {
  fs.writeFileSync("datas/test.txt", "hello world secara synchronous!");
} catch (error) {
  console.log(error);
}

// jalankan dengan : node ./file-system/write/fileSystem2
// disini hasilnya akan mencari folder datas, jika ada maka akan dibuatkan file test.txt
// namun pada akhirnya akan error karna tidak mempunyai folder datas.
