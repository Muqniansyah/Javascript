const lodash = require("lodash");

const myOddEvenArray = lodash.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);

// output dijalankan dgn perintah seperti ini pada root folder NPM :
// node ./mencoba-package/lodash
