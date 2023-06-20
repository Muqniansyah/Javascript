// Rest parameter juga dituliskan menggunakan three consecutive dots (...).
// Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.

/* 
Rest parameter juga dapat digunakan pada array destructuring, 
di mana kita dapat mengelompokkan nilai-nilai array 
yang terdestruksi pada variabel dalam bentuk array yang lain. 
*/

const alat = ["sapu", 20, 2, "jus", "susu", "mie"];
const [perkakas, berat, jumlah, ...hidangan] = alat;

console.log(perkakas);
console.log(berat);
console.log(jumlah);
console.log(hidangan);

/*
nilai dari array alat dimasukkan ke individual lokal variabel menggunakan array destructuring.
Variabel perkakas, berat, jumlah diberikan nilai index tiga pertama dari array alat. 
Sedangkan, variabel hidangan di mana kita menggunakan rest parameter, akan diberikan sisa nilai yang ada sebagai array.
*/
