let counter = 0;

function tampilkanCounter() {
  console.log("Counter (setInterval):", counter);
  counter++;
}

// Setelah 5 detik, tampilkan pesan
setTimeout(() => {
  console.log("Pesan setelah 5 detik");
}, 5000);

// Panggil setInterval untuk menjalankan tampilkanCounter setiap detik
setInterval(tampilkanCounter, 1000);
