// contoh dari object dengan memberikan baris baru setiap menetapkan key-value untuk memisah antar nilainya.

let user = {
  firstName: "Muqniansyah",
  lastName: "Arifin",
  age: 18,
  disabilitas: false,
  colour: ["Green", "Blue", "Black"],
  favorite: {
    food: "Mie",
    drink: "Kopi",
  },
  // jika key memerlukan spasi, maka perlu diberikan tanda petik
  "hair colour": "hitam",
};

console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("umur saya " + user.age + " tahun");
console.log(
  "saya suka makanan " +
    user.favorite.food +
    " dan minuman " +
    user.favorite.drink
);

// contoh mengakses property dari object menggunakan bracket(tanda kurung siku [])
// gunanya bracket diantaranya untuk mengakses key yang punya spasi
console.log("rambut saya berwarna " + user["hair colour"]);
