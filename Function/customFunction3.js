//function juga dapat mengembalikkan sebuah nilai. dengan menggunakan keywoard return diikuti dengan nilai yang akan dikembalikkan.
// ketika statement return tereksekusi, maka fungsi akan langsung terhenti dan mengembalikkan nilai.

function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);

console.log(result);

// bedanya argumen dan parameter.
/*
jika argumen yang berada pada function. contoh :
function multiply(a, b) {

}
pada contoh ini (a,b) adalah argumen.
*/
/*
jika parameter yang berada pada pemanggilan function. contoh :
let result = multiply(10, 2);

pada contoh ini (10,2) adalah parameter.
*/
