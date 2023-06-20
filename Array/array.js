// nilai nilai yang ada pada array disusun dan diakses secara indexing.

let myArray = ["red", 20, true];

/* 
untuk akses nilai didalam array menggunakan tanda kurung siku [] 
yang didalamnya berupa angka yang merupakan posisi nilai yang ingin diakses.
*/
// index dimulai dari angka 0(nol)
console.log(myArray[0]);

// contoh jika akses nilai array lebih dari indexnya, maka menghasilkan undefined
console.log(myArray[3]);

// index terakhir array selalu jumlah nilai array -1
console.log("panjang nilai array adalah " + myArray.length);
