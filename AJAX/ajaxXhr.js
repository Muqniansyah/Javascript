// buat objek baru
const xhr = new XMLHttpRequest();

// callback function
xhr.onload = function () {
  console.log(this.responseText);
};

xhr.onerror = function () {
  console.log("something error");
};

/*Dikarenakan nilai this di dalam callback function tersebut merupakan XHR obyek, 
kita tidak dapat menggunakan gaya arrow function dalam menuliskan callback function-nya.*/
