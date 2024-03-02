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
const pertanyaan1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan nama anda : ", (nama) => {
      resolve(nama);
    });
  });
};

const pertanyaan2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan email anda : ", (email) => {
      resolve(email);
    });
  });
};

// untuk menyimpan contacts
const simpanContacts = (nama, email) => {
  const contact = { nama, email };
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));

  console.log("Terima kasih sudah memasukkan data.");
  rl.close();
};

// export module
module.exports = { pertanyaan1, pertanyaan2, simpanContacts };
