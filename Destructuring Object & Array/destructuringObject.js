// Penulisan destructuring object pada ES6 sintaks menggunakan objek literal { } di sisi kiri dari operasi assignment.

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// contoh penulisannya destructuring object:
const { firstName, lastName, age } = profile;

console.log(firstName, lastName, age);

/*
Dalam destructuring object, kita bisa menspesifikasikan salah satu nilai yang ingin kita destruksikan. 
Dengan ini kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya. 
*/
