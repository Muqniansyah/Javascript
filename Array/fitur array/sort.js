// sort digunakan untuk mengurutkan elemen dalam array. Anda dapat memberikan sebuah fungsi perbandingan khusus untuk mengatur aturan pengurutan.

const fruits = ["apel", "pisang", "ceri", "durian"];
fruits.sort(); // Mengurutkan secara leksikografis.
// Hasilnya adalah ['apel', 'ceri', 'durian', 'pisang']

console.log(fruits);

const numbers = [10, 5, 8, 1, 7];
numbers.sort((a, b) => a - b); // Mengurutkan secara numerik.
// Hasilnya adalah [1, 5, 7, 8, 10]

console.log(numbers);
