/*
Untuk memberhentikan eksekusi setInterval, Anda dapat menggunakan fungsi clearInterval. 
Pertama, Anda perlu menyimpan ID interval yang dikembalikan oleh setInterval. Berikut adalah contohnya:
*/

// Fungsi yang akan dieksekusi setiap 2000 milidetik (2 detik)
function tampilkanPesan() {
  console.log("Pesan ini muncul setiap 2 detik.");
}

// Mengeksekusi fungsi setiap 2000 milidetik (2 detik) dan menyimpan ID interval
const intervalId = setInterval(tampilkanPesan, 2000);

// Memberhentikan eksekusi setelah 10 detik (contoh)
setTimeout(function () {
  clearInterval(intervalId); // Menghentikan interval berdasarkan ID
  console.log("Interval dihentikan setelah 10 detik.");
}, 10000);

/*
Dalam contoh ini, setInterval akan dieksekusi setiap 2 detik, 
dan clearInterval akan dipanggil setelah 10 detik, menghentikan interval. 
Anda perlu menyimpan ID interval yang dikembalikan oleh setInterval dan menggunakannya untuk memberhentikan interval yang sesuai.
*/
