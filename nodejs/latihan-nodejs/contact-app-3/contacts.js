const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

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

// untuk ambil data dari contacts.json
const loadContact = () => {
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// untuk menyimpan contacts
const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };

  const contacts = loadContact();

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    // supaya jika ketemu error functionnya berhenti
    return false;
  }

  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
      // supaya jika ketemu error functionnya berhenti
      return false;
    }
  }

  // cek no HP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid!"));
    // supaya jika ketemu error functionnya berhenti
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold("Terima kasih sudah memasukkan data."));
};

// untuk menampilkan contacts
const listContact = () => {
  const contacts = loadContact();

  console.log(chalk.cyan.inverse.bold("Daftar Kontak : "));

  // looping untuk telusuri isi dari contacts dan kita ambil nama dan no HP.
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

// untuk menampilkan detail contacts
const detailContact = (nama) => {
  const contacts = loadContact();

  // mencari daftar contacts.json sesuai dengan namanya. jika ada maka tampilkan semua datanya.
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  // jika tidak ada nama pada contacts.json
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    // supaya jika ketemu error functionnya berhenti
    return false;
  }

  // jika ada nama pada contacts.json maka tampilkan detail dari datanya.
  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noHP);
  if (contact.email) {
    console.log(contact.email);
  }
};

// untuk menghapus contacts
const deleteContact = (nama) => {
  const contacts = loadContact();

  // contacts.filter ini akan menghasilkan sebuah array baru. dan array baru ini kita simpan kedalam variabel newContacts.
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  // jika tidak ada nama pada contacts.json
  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    // supaya jika ketemu error functionnya berhenti
    return false;
  }

  // jika ada nama pada contacts.json maka kita save atau kita simpan arraynya.
  fs.writeFileSync("./data/contacts.json", JSON.stringify(newContacts));

  console.log(
    chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus!`)
  );
};

// export module
module.exports = { simpanContact, listContact, detailContact, deleteContact };
