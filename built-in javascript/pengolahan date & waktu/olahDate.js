// Membuat objek tanggal saat ini
const tanggalSekarang = new Date();
console.log("Tanggal dan Waktu Sekarang:", tanggalSekarang);

// Mendapatkan tahun
const tahun = tanggalSekarang.getFullYear();
console.log("Tahun:", tahun);

// Mendapatkan bulan (dimulai dari 0, Januari adalah 0)
const bulan = tanggalSekarang.getMonth() + 1; // ditambah 1 karena dimulai dari 0
console.log("Bulan:", bulan);

// Mendapatkan tanggal
const tanggal = tanggalSekarang.getDate();
console.log("Tanggal:", tanggal);

// Mendapatkan jam
const jam = tanggalSekarang.getHours();
console.log("Jam:", jam);

// Mendapatkan menit
const menit = tanggalSekarang.getMinutes();
console.log("Menit:", menit);

// Mendapatkan detik
const detik = tanggalSekarang.getSeconds();
console.log("Detik:", detik);

// Format tanggal kustom
const formatTanggal = `${tahun}-${bulan < 10 ? "0" : ""}${bulan}-${
  tanggal < 10 ? "0" : ""
}${tanggal}`;
console.log("Format Tanggal Kustom:", formatTanggal);

/*
Dalam contoh di atas, kita menggunakan objek Date yang merupakan bagian dari JavaScript untuk memanipulasi tanggal dan waktu. 
Anda dapat mendapatkan berbagai komponen seperti tahun, bulan, tanggal, jam, menit, dan detik menggunakan metode yang sesuai pada objek Date. 
Format tanggal juga dapat disesuaikan sesuai kebutuhan Anda. 
*/
