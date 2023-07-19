// Pada penggunaan arrow function kita melihat bahwa variabel yang diletakan sebelum tanda panah (=>) adalah merupakan parameter dari fungsi.

const sayName = (name) => console.log(`Nama saya ${name}`);

const sayHai = (name) => console.log(name);

sayName("muqni");
sayHai("muni");

// Namun jika kita sama sekali tidak membutuhkan parameter, biarkan saja tanda kurung tersebut kosong.
const sayHello = () => console.log("Selamat pagi semuanya!");

sayHello();
