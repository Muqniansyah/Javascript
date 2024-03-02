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

// cara exportnya cuma sekali tapi yang kita isi adalah objek.
module.exports = {
  cetakNama: cetakNama,
  PI: PI,
  mahasiswa: mahasiswa,
  Orang: Orang,
};
