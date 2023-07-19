/*
kita dapat menetapkan nilai default pada parameter fungsi. Dengan menggunakan default parameters, 
nilai pada parameter tidak akan menghasilkan undefined walaupun kita tidak memberikan nilai ketika fungsi tersebut dipanggil.
Default parameter dapat digunakan pada regular function ataupun arrow function.
*/

//default parameters pada regular function
function sayHello(nama = "Strangers", greet = "hello") {
  console.log(greet, nama);
}

sayHello("Muni", "Selamat pagi");
sayHello();

//default parameters pada arrow function
const sayHai = (nama = "manusia", greet = "hello") => console.log(greet, nama);

sayHai("Muqniansyah", "Selamat siang");
sayHai();

/*
Pada contoh di atas, kita menggunakan tanda assignment (=) untuk menetapkan parameter nama 
dengan nilai default “Stranger” atau "manusia" dan parameter greet dengan nilai default “hello”. 
Hal ini sangat berguna ketika kita memanggil fungsi sayHello() ataupun sayHai() tanpa menetapkan nilai parameter di dalamnya. 
Walaupun kita tidak menetapkan nilainya, kedua parameter tersebut tidak akan menghasilkan undefined.
*/
