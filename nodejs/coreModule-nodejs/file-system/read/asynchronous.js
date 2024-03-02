// membaca isi file secara asynchronous
const fs = require("fs");

fs.readFile("./file-system/read/test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// jalankan dengan : node ./file-system/read/asynchronous
