// Manipulasi panjang (length) array di JavaScript dapat dilakukan untuk menambah atau mengurangi elemen array.

// contoh 1 : Menambah Elemen ke Array
let fruits = ["apple", "banana", "orange"];

console.log("Sebelum menambah:", fruits); // ['apple', 'banana', 'orange']

// Menambahkan elemen baru
fruits.length = 4;
fruits[3] = "grape";

console.log("Setelah menambah:", fruits); // ['apple', 'banana', 'orange', 'grape']

// kita mengatur length array menjadi 4, sehingga elemen ke-3 (indeks 2) secara otomatis terisi dengan nilai undefined. Kemudian, kita menambahkan elemen baru ('grape') ke dalam array.
