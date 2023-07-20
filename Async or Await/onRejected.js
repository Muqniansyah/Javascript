// Menangani onRejected menggunakan async/await
//prinsip synchronous code. Kita dapat menangani sebuah eror atau tolakan dengan menggunakan try...catch.

// fungsi untuk mendapatkan kopi
const getCoffee = () => {
  // mengembalikkan objek promise dengan resolver function
  return new Promise((resolve, reject) => {
    const seeds = 100;

    // menentukan waktu dan urutan dengan setTimeout()
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Coffee didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

// dengan async await proses synchronous
async function makeCoffee() {
  // function handle callback
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffee();

// Ketika menggunakan async/await, biasakan untuk menggunakan try saat mendapatkan nilai resolved dari sebuah promise
// Dengan begitu kita dapat menggunakan block catch untuk menangani jika promise gagal dilakukan (onRejected).
