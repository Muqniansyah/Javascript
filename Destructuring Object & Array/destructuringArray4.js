// Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antar dua variabel.

let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a];

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
