// arrow function hanya berupa function expression saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expressions”.

// function expression
const sayHello = (a, b) => console.log(a * b);

// pemanggilan fungsi
sayHello(2, 3);

/*
Karena arrow function merupakan sebuah expression, 
maka ia hanya dapat digunakan untuk disimpan pada variabel (seperti contoh kode di atas), 
sebagai argumen pada sebuah fungsi, dan sebagai nilai dari properti objek.
*/
