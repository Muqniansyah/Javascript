// memebuat objek baru
const xhr = new XMLHttpRequest();

// callback funtion
xhr.onload = function () {
  console.log(this.responseText);
};

xhr.onerror = function () {
  console.log("error");
};

// kita tentukan HTTP Method dan URL yang dituju dengan menggunakan method open().
xhr.open("GET", "https://reqres.in");

//mengirimkan request yang sudah kita konfigurasi di atas menggunakan method send().
xhr.send();

/*Jika request berhasil, Anda akan mendapatkan data dalam bentuk JSON String.
Data tersebut bisa Anda olah menjadi JavaScript obyek dengan mengubahnya menggunakan method JSON.parse().
*/
JSON.parse(this.responseText);
