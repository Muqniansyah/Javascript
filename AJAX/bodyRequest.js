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

// untuk menetapkan data pada body request, lakukanlah pada method send() dari instance XMLHttpRequest.
const book = {
  id: 10,
  title: "anak-langit",
  author: "bujang",
};

xhr.send(JSON.stringify(book));
