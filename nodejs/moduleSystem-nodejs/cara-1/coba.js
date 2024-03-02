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

// cara exportnya kita kirim sebagai property atau methodnya kedalam exportsnya.
// sebelum sama dengan penamaanya boleh bebas namun untuk setelah sama dengan kita mengammbil function atau property yang kita buat atau kita tuju.
module.exports.cetak = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;
module.exports.Orang = Orang;
