const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("masukkan no Hp anda : ", (noHP) => {
    const contact = { nama, noHP }; // data yang akan ditangkap dari command prompt
    // baca isi file
    const file = fs.readFileSync("./readline/contacts.json", "utf-8");
    // ubah dari string menjadi json
    const contacts = JSON.parse(file);
    // masukkan data objek kedalam json. perilaku json sama seperti array bisa dipush.
    contacts.push(contact);
    // tuliskan kedalam file json dan kita ubah juga json atau array kosong yang didalamnya objek menjadi string
    fs.writeFileSync("./readline/contacts.json", JSON.stringify(contacts));

    console.log("Terima kasih sudah memasukkan data.");

    rl.close();
  });
});

// jalankan dengan : node ./readline/readline2
