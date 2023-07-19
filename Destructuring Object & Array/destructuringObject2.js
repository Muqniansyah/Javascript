// Destructuring Assignment pada object (DAO)
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

let firstName = "Dimas";
let age = 20;

// menginisialisasi nilai baru melalui object destruction
({ firstName, age } = profile);
// Saat melakukan destructuring assignment, kita harus menuliskan destructuring object di dalam tanda kurung.

console.log(firstName);
console.log(age);
