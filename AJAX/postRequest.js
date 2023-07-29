/*
Untuk menetapkan properti pada request header, 
Anda dapat gunakan method setRequestHeader() dari instance XMLHttpRequest setelah method open() dijalankan.
Method tersebut menerima dua parameter. Parameter pertama merupakan nama properti dan
parameter yang kedua adalah nilai yang akan ditetapkan pada properti tersebut. 
*/

// buat objek baru
const xhr = new XMLHttpRequest();

// callback function
xhr.onload = function () {
  console.log(this.responseText);
};

xhr.onerror = function () {
  console.log("error");
};

// http method
xhr.open("POST", "https://reqres.in/api/users");

// menambahkan propery pada header request
xhr.setRequestHeader("Content-Type", "application/json");
