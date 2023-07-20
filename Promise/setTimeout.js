// Fungsi setTimeout() merupakan cara yang paling mudah untuk membuat kode kita dijalankan secara asynchronous.
/*Fungsi ini menerima dua buah parameter. Pertama adalah fungsi yang akan dijalankan secara asynchronous, 
dan kedua adalah nilai number dalam milisecond sebagai nilai tunggu sebelum fungsi dijalankan.*/

console.log("Selamat datang");

setTimeout(() => {
  console.log("Terimakasih sudah mampir, silakan datang kembali!");
}, 3000);

console.log("ada yang bisa dibantu ?");

// setTimeout() tidak akan menghentikan JavaScript untuk melakukan eksekusi kode pada baris berikutnya.
// jadi dengan setTimeout() kita bisa menentukkan urutan dan waktu.
