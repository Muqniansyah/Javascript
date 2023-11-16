// every digunakan untuk memeriksa apakah semua elemen dalam array memenuhi kondisi tertentu.

const numbers = [2, 4, 6, 7, 8];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);
// Hasilnya adalah false, karena ada satu angka (7) yang bukan genap.
