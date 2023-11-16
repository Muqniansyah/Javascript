// Pembagian (Division):

function bagi(angka1, angka2) {
  // Menambahkan penanganan pembagian dengan nol
  return angka2 !== 0 ? angka1 / angka2 : "Tidak dapat dibagi dengan nol";
}

const hasilBagi = bagi(10, 2);
console.log("Hasil Pembagian:", hasilBagi);
