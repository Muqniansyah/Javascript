// untuk ubah JSON ke objek
// dicontoh ini memakai ajax

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let mahasiswa = JSON.parse(this.responseText);
    console.log(mahasiswa);
  }
};

xhr.open("GET", "data.json", true);
xhr.send();
