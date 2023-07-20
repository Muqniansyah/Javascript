// Salah satu cara menulis kode yang baik adalah mengikuti prinsip yang disebut separation of concerns yang artinya pemisahan masalah.
// Pemisahan masalah berarti mengorganisasikan kode ke dalam bagian-bagian yang berbeda berdasarkan tugas tertentu.

/*
Method .catch() mirip seperti .then(). Namun method ini hanya menerima satu parameter function yang digunakan untuk rejected handler. 
Method .catch() ini akan terpanggil bilamana objek promise memiliki kondisi onRejected. 
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
makeCoffee.then(handlerSuccess).catch(handlerRejected);

// Dengan menggunakan method catch(), kita dapat menerapkan prinsip separation of concerns sekaligus membuat kodenya lebih rapi.
