const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder data jika belum ada
const direktoriPath = "./data";
if (!fs.existsSync(direktoriPath)) {
  fs.mkdirSync(direktoriPath);
}

// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// kita bungkus setiap pertanyaan menjadi promise
// kita bisa bikin 1 pertanyaan yang bisa kita gunakan berulang ulang.
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

// untuk menyimpan contacts
const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));

  console.log("Terima kasih sudah memasukkan data.");
  rl.close();
};

// export module
module.exports = { tulisPertanyaan, simpanContact };
