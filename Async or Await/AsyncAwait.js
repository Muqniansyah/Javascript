//kita dapat menuliskan asynchronous process layaknya synchronous process dengan bantuan keyword async dan await.
//async/await ini tidak dapat digunakan jika tidak ada Promise.

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
  const coffee = await getCoffee(); //variabel coffee digunakan untuk handle callback yang menampung getCoffe()
  console.log(coffee);
}

// dengan proses asynchronous

// function makeCoffee() {
//   getCoffee().then((coffee) => {  //jalankan fungsi mendapatkan kopi dan buat function handle callback
//     console.log(coffee);
//   });
// }

// pemanggilan fungsi
makeCoffee();

/*
Keyword async digunakan untuk memberitahu JavaScript untuk menjalankan fungsi makeCoffee() secara asynchronous. 
Lalu keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() 
mengembalikan nilai promise resolve.
*/
