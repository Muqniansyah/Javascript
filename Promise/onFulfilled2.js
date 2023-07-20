/*Kita dapat menyimpan kedua handle callback baik onFulfilled atau onRejected pada parameter method .then(), 
yang perlu kita perhatikan adalah pastikan handle callback untuk onFulfilled disimpan pada parameter pertama 
*/

// resolver function
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = false;

  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!");
  }
};

// function handle callback
const handlerSuccess = (coffee) => {
  console.log(coffee);
};

const handlerRejected = (rejectionReason) => {
  console.log(rejectionReason);
};

// buat objek promise
const makeCoffee = new Promise(executorFunction);

// pemanggilan fungsi
makeCoffee.then(handlerSuccess, handlerRejected);

// note : disini kita buat objek promise yang didalamnya menjalankan executorFunction dan kemudian jalankan function handle callback
