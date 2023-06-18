// untuk mengubah nilai property didalam object, kita gunakan assignment operator (=)

const ayam = {
  nama: "ciken",
  suara: "kukuruyuk",
  kecepatan: 500,
  warna: "merah",
};

// mengubah
ayam.warna = "biru";
// menambahkan
ayam["kecpatan"] = 200;

console.log(ayam);

/*
object ayam dideklarasikan sebagai const, tetapi kita bisa mengubah nilainya karena ubah nilai
beda dengan menginisialisasi ulang nilai. ketika buat object, kita tidak terikat dengan
property didalamnya sehingga kita bisa modifikasi nilainya. berbeda jika menginisialisasi ulang
variabel dari object.
*/
