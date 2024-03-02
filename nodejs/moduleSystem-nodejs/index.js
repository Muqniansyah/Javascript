// penjelasan tentang cara memanggil atau melakukan require() modules.

const fs = require("fs"); // core modules
const cetakNama = require("./coba"); // local modules. karna ada ./ atau relative url.
const moment = require("moment"); // third party modules atau npm module. modules ini akan ada didalam folder node_modules

console.log(cetakNama("muni"));
