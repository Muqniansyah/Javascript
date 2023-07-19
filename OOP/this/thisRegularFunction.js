// Perbedaan karakteristik dari arrow function dan regular function selanjutnya ada pada penggunaan keyword this.
// contoh ketika this digunakan oleh regular function

function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

// Jika sebuah regular function dipanggil dengan menggunakan keyword new, maka nilainya akan menjadi objek.
const programmer = new People("john", 21, [
  "basletball",
  "volleyball",
  "football",
]);

console.log(programmer.name);
console.log(programmer.age);
console.log(programmer.hobby);

// Objek yang dibuat menggunakan function dengan keyword new, sama halnya seperti kita membuat objek seperti menggunakan objek literals { }.
