const fs = require("fs");

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

// ambil semua data di contacts.json
const loadContact = () => {
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContact();

  // mencari daftar contacts.json sesuai dengan namanya. jika ada maka tampilkan semua datanya.
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  return contact;
};

// menuliskan / menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
};

// menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

// cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama);
};

// hapus contact
const deleteContact = (nama) => {
  const contacts = loadContact();

  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);

  console.log(filteredContacts);
  saveContacts(filteredContacts);
};

// mengubah contacts
const updateContacts = (contactBaru) => {
  const contacts = loadContact();

  // hilangkan contact lama yang namanya sama dengan oldNama
  const filteredContacts = contacts.filter(
    (contact) => contact.nama !== contactBaru.oldNama
  );

  console.log(filteredContacts, contactBaru);
  delete contactBaru.oldNama; // hapus data lama dari oldNama
  filteredContacts.push(contactBaru); // tambahkan data baru
  saveContacts(filteredContacts); // menimpa apapun didalam contacts.json dengan data baru atau data contact baru.
};

module.exports = {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
  deleteContact,
  updateContacts,
};
