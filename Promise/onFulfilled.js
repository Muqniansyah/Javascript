// untuk mengakses nilai yang dibawa oleh fungsi resolve atau reject itu sendiri yaitu menggunakan method .then() yang tersedia pada objek Promise.

// resolver function
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;

  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!");
  }
};

// function handle callback
const handlerSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

// buat objek promise
const makeCoffe = new Promise(executorFunction);

// pemanggilan fungsi
makeCoffe.then(handlerSuccess);

/* menangani nilai yang dikirimkan oleh resolve().
gunakan method .then() pada objek promise yang kita buat. 
Lalu di dalam method .then() kita berikan parameter 
berupa function yang berguna sebagai handle callback. 
*/
