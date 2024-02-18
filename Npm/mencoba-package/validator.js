const validator = require("validator");

// untuk cek apakah ini email atau bukan
console.log(validator.isEmail("muqniansyah@gmail.com"));

// untuk cek no HP atau bukan
console.log(validator.isMobilePhone("0812345678", "id-ID"));

// untuk cek serangkaian angka atau bukan
console.log(validator.isNumeric("0812345678"));

// cara jalankan :
// node ./mencoba-package/validator
