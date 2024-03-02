function cetakNama(nama) {
  return `halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "cabi",
  umur: 20,
  // method
  cetakMahasiswa() {
    return `halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat!!");
  }
}

// cara exportnya dengan memakai notasi ES6 yaitu jika namanya sama antara propertynya dengan valuenya maka bisa ditulis sekali saja.
module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
};
