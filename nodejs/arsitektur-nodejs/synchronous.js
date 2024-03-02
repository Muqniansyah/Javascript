// Synchronous

const getUserSync = (id) => {
  const nama = id === 1 ? "Muqni" : "Muni";
  return { id, nama };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = "Hello World!";
console.log(halo);

// jalankan dengan perintah
// node ./arsitektur-nodejs/synchronous
