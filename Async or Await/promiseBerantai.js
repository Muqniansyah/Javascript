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

// Promise berantai menggunakan async/await
async function reserveACoffee(type, miligrams) {
  try {
    const seeds = await getSeeds(type, miligrams);
    const coffee = await makeCoffee(seeds);
    const result = await servingToTable(coffee);
    console.log(result);
  } catch (rejectionReason) {
    console.log(rejectionReason);
  }
}

reserveACoffee("liberica", 80);

// Async/await ini menjadi fitur baru yang sangat berguna. Terlebih untuk kita yang lebih nyaman menangani proses asynchronous dengan menggunakan gaya synchronous.
