// find digunakan untuk menemukan elemen pertama dalam array yang memenuhi kondisi tertentu.

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const person = people.find((person) => person.age === 25);
// Ini akan mengembalikan objek Bob.

console.log(person);
