// Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous code. Cara paling dasar adalah dengan menggunakan callback function.
// pertama kita tambahkan parameter dengan nama callback pada fungsi asynchronous.
// Kemudian kita panggil/gunakan callback di dalam function setTimeout() yang diisikan dengan data yang akan dibawa (cake) ketika task selesai dilakukan.
// Setelah menggunakan callback, fungsi tidak perlu lagi mengembalikan nilai. Sehingga kita bisa hapus kode return cake

//tambah parameter callback
const getCake = (callback) => {
  let cake = null;
  console.log("Sedang membuat kue, silakan tunggu ....");

  setTimeout(() => {
    cake = "Kue Selesai!";
    callback(cake); // gunakan callback di dalam function setTimeout()
  }, 3000);

  // return cake;  // penghapusan return
};

// pemanggilan fungsi
getCake((cake) => {
  console.log(cake);
});
