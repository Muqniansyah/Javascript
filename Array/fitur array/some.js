// some digunakan untuk memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi tertentu.

const numbers = [2, 4, 6, 7, 8];
const isEven = numbers.some((num) => num % 2 === 0);
console.log(isEven);
// Hasilnya adalah true, karena setidaknya satu angka (2, 4, 6, 8) adalah genap.
