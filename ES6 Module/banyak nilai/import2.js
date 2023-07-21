// Namun, jika kita tetap ingin mengubah penamaan variabel dari named import, kita bisa melakukannya dengan menambahkan keyword as setelah penamaan variabelnya.
import { stokKopi as stock, kopiSiapSaji } from "./export.js";

console.log(stock);
console.log(kopiSiapSaji);
