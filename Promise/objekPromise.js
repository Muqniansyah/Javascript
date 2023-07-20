// promise adalah salah satu solusi untuk menghindari callback hell
// Promise ini dapat menggantikan peran callback dengan menggunakan ciri khas fungsi .then-nya itu.

// resolver function
const executorFunction = (resolve, reject) => {
  const coffeReady = true;

  if (coffeReady) {
    resolve("kopi berhasil dibuat");
  } else {
    reject("mesin kopi tidak bisa digunakan");
  }
};

// buat objek baru dari Promise dgn konstruktor promise yg didalamnya menjankan resolver function.
const makeCoffe = new Promise(executorFunction);

// OUTPUT
console.log(makeCoffe);

// Dalam promise terdapat 3 (tiga) kondisi, yakni: Pending (Janji sedang dalam proses), Fulfilled (Janji terpenuhi), Rejected (Janji gagal terpenuhi
// Untuk membuat objek promise, kita gunakan keyword new diikuti dengan constructor dari Promise.
// Di dalam constructor Promise kita perlu menetapkan resolver function atau bisa disebut executor function di mana fungsi tersebut akan dijalankan secara otomatis ketika constructor Promise dipanggil.
// Executor function akan berjalan secara asynchronous hingga akhirnya kondisi Promise berubah dari pending menjadi fulfilled/rejected.
// untuk buat promise, langkahnya : buat resolve function lalu buat objek promise.
