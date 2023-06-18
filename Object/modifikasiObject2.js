// contoh jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object.

const nama = {
  firstName: "Muqniansyah",
  lastName: "Arifin",
};

nama.age = 19;

console.log(nama);

// contoh menghapus property pada object dengan menggunakan keywoard delete.
delete nama.lastName;

console.log(nama);
