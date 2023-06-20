// mode strict adalah mode yg memaksa penulisan program javascript yang baik & aman.
// jalankan mode strict dengan cara menuliskan perintah "use strict" pada awal sebuah script/function.
// perintah ditulis dalam bentuk tulisan biasa dan bukan merupakan statement.

// contoh penggunaan mode strict dalam function
x = 9;

function showangka() {
  "use strict";
  x = 9;
  // pemberitahuan eror pada console yang menjelaskan bahwa "alert is not defined"
  alert(x);
}

showangka();

/* 
jika perintah ditulis diawal sebuah script maka berlaku untuk secara global. 
jika ditulis dalam function maka tidak akan berlaku secara global.
*/
