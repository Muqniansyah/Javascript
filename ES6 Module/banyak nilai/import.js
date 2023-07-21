/*
untuk mengimport/ mendapatkan nilai yang diekspor menggunakan named export pada file export2,
kita gunakan teknik destructuring object.
*/
import { stokKopi, kopiSiapSaji } from "./export.js";

console.log(stokKopi);
console.log(kopiSiapSaji);

/*
Dikarenakan named import menggunakan teknik destructuring object untuk mendapatkan nilainya,
maka pastikan penamaan variabel sesuai dengan nama variabel yang diekspor. 
Jika terjadi kesalahan penulisan, maka akan terjadi error. 
*/
