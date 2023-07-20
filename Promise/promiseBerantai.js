//Dengan promise kita dapat melakukan proses asynchronous operation saling bergantungan satu sama lain. secara berantai.

// melakukan proses berantai pada Promise

// objek dari stok kopi
const state = {
  isCoffeeMakerReady: true,
  seedStocks: {
    arabica: 250,
    robusta: 60,
    liberica: 80,
  },
};

// fungsi untuk mendapatkan bahan
const getSeeds = (type, miligrams) => {
  // mengembalikkan objek promise dengan resolver function
  return new Promise((resolve, reject) => {
    if (state.seedStocks[type] >= miligrams) {
      state.seedStocks[type] -= miligrams;
      resolve("Biji kopi didapatkan!");
    } else {
      reject("Maaf stock kopi habis!");
    }
  });
};

// fungsi untuk membuat kopi
const makeCoffee = (seeds) => {
  // mengembalikkan objek promise dengan resolver function
  return new Promise((resolve, reject) => {
    if (state.isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat!");
    } else {
      reject("Maaf mesin tidak dapat digunakan!");
    }
  });
};

// fungsi untuk melayani ke meja
const servingToTable = (coffee) => {
  // mengembalikkan objek promise dengan resolver function
  return new Promise((resolve) => {
    resolve("Pesanan kopi sudah selesai!");
  });
};

// fungsi untuk memesan kopi
function reserveACoffee(type, miligrams) {
  getSeeds(type, miligrams) //jalankan fungsi memastikan bahan tersedia
    .then(makeCoffee) // lalu panggil method .then() dari fungsi getSeeds, untuk jalankan fungsi membuat kopi
    .then(servingToTable) // lalu jalankan fungsi hidangkan kepada pelanggan setelah mendapatkan kopi dari fungsi makeCoffee.
    // function handle callback
    .then((resolvedValue) => {
      console.log(resolvedValue);
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
    });
}

// pemanggilan fungsi
/* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
reserveACoffee("liberica", 80);
