/* 
Named export digunakan untuk mengekspor banyak nilai dalam berkas JavaScript. 
Cara kerjanya mirip seperti pada Node.js. Nilai yang akan diekspor dituliskan di dalam objek literals.
*/

const stokKopi = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

const kopiSiapSaji = true;

// contoh penggunaan export
export { stokKopi, kopiSiapSaji };
