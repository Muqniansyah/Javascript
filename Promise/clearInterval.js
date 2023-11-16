// clearInterval digunakan untuk menghentikan eksekusi berulang dari fungsi yang dijadwalkan menggunakan setInterval. Fungsi ini memerlukan parameter berupa nilai pengenal yang dikembalikan oleh setInterval.

let counter = 0;

// Fungsi yang akan dieksekusi setiap 1 detik
function tampilkanCounter() {
  console.log("Counter:", counter);
  counter++;

  if (counter > 5) {
    clearInterval(intervalId); // Menghentikan eksekusi setelah 5 detik
    console.log("Interval dihentikan.");
  }
}

// Menjadwalkan eksekusi fungsi setiap 1000 milidetik (1 detik)
const intervalId = setInterval(tampilkanCounter, 1000);

/*
Pada contoh di atas, kita membuat variabel counter yang akan ditampilkan setiap detik oleh fungsi tampilkanCounter. Jika nilai counter mencapai 5, kita menggunakan clearInterval(intervalId) untuk menghentikan eksekusi.
Jadi, fungsi setInterval di sini akan menampilkan counter setiap detik, dan setelah mencapai 5 detik, kita menggunakan clearInterval untuk menghentikannya.
*/
