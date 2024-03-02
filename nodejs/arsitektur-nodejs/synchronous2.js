// Synchronous

const getUserSync = (id) => {
  let nama = "";
  if (id === 1) {
    nama = "Muqni";
  } else {
    nama = "Muni";
  }
  return { id: id, nama: nama };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = "Hello World!";
console.log(halo);

// jalankan dengan perintah
// node ./arsitektur-nodejs/synchronous2
