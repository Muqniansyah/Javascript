// Menambah elemen ke dalam array di JavaScript dapat dilakukan dengan beberapa metode.

// Menambahkan elemen ke akhir array dengan push()
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");

console.log(fruits); // ['apple', 'banana', 'orange', 'grape']

// Menambahkan elemen ke awal array dengan unshift()
let buah = ["banana", "orange"];
buah.unshift("apple");

console.log(buah); // ['apple', 'banana', 'orange']

// Menambahkan beberapa elemen ke akhir array dengan spread operator(...)
let buahBuah = ["banana", "orange"];
buahBuah = [...buahBuah, "apple", "grape"];

console.log(buahBuah); // ['banana', 'orange', 'apple', 'grape']

// Menambahkan elemen dengan concat()
let iniBuah = ["banana", "orange"];
iniBuah = iniBuah.concat("apple", "grape");

console.log(iniBuah); // ['banana', 'orange', 'apple', 'grape']

// Menambahkan elemen menggunakan splice()
let buahAja = ["banana", "orange"];
buahAja.splice(1, 0, "apple", "grape");

console.log(buahAja); // ['banana', 'apple', 'grape', 'orange']
