// slice digunakan untuk membuat salinan sebagian array tanpa mengubah array aslinya.

const numbers = [1, 2, 3, 4, 5];
const subset = numbers.slice(1, 4); // Membuat salinan elemen indeks 1 hingga 3.
// Hasilnya adalah [2, 3, 4]

console.log(subset);
