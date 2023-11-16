// findIndex digunakan untuk menemukan indeks elemen pertama yang memenuhi kondisi tertentu.

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const index = people.findIndex((person) => person.age > 30);
// Ini akan mengembalikan indeks 2 (Charlie).

console.log(index);
