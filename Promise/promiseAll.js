// jika kita ingin menjalankan banyak promise sekaligus, Caranya adalah menggunakan Promise.all().
/* Method Promise.all() dapat menerima banyak promise (dalam bentuk array) pada parameternya. 
Kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise yang kita tetapkan dalam bentuk array.*/

// fungsi memesan kopi arabica
const arabicaOrder = () => {
  // mengembalikkan objek promise dengan resolver function
  return new Promise((resolve) => {
    // menentukan waktu dan urutan dengan setTimeout()
    setTimeout(() => {
      resolve("Kopi arabika selesai!");
    }, 4000);
  });
};

// fungsi memesan kopi robusta
const robustaOrder = () => {
  // mengembalikkan objek promise dengan resolver function
  return new Promise((resolve) => {
    // menentukan waktu dan urutan dengan setTimeout()
    setTimeout(() => {
      resolve("Kopi robusta selesai!");
    }, 2000);
  });
};

// fungsi memesan kopi liberica
const libericaOrder = () => {
  // mengembalikkan objek promise dengan resolver function
  return new Promise((resolve) => {
    // menentukan waktu dan urutan dengan setTimeout()
    setTimeout(() => {
      resolve("Kopi liberica selesai!");
    }, 3000);
  });
};

// membuat variabel promises untuk menyimpan berbagai promise yang akan dijalankan bersamaan
// Urutan nilai yang dihasilkan sesuai dengan urutan promise yang kita tentukan didalam promisesnya.
const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];

// menjalankan promise all beserta dengan function handle callback
Promise.all(promises).then((resolvedValue) => {
  console.log(resolvedValue);
});

// Promise.all() akan mengembalikan nilai jika seluruh proses promise di dalamnya selesai dijalankan.
