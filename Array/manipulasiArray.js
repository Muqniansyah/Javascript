// memanipulasi data pada array

// 1. menambahkan data kedalam array, menggunakan push().
const myArray = ["muqni", 19];

myArray.push("ganteng");
console.log(myArray);

// 2. mengeluarkan data / elemen terakhir dari array, menggunakan pop().
myArray.pop();
console.log(myArray);

// 3. mengeluarkan elemen pertama dari array, menggunakan shift().
myArray.shift();
console.log(myArray);

// 4. menambahkan elemen diawal array, menggunakan unshift().
myArray.unshift("halo");
console.log(myArray);

// 5. menghapus data dari array, menggunakan delete.
delete myArray[1];
console.log(myArray);

// 6. menghapus elemen pada array, menggunakan splice().
// contoh dibawah ini yaitu menghapus dari index satu sebanyak satu elemen.
myArray.splice(1, 1);
console.log(myArray);
