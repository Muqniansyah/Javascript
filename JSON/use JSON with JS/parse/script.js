// ubah JSON jadi objek
// menggunakan JSON.parse(), dengan merequest file JSON lalu ubah jadi object (menggunakan XMLHttpRequest).

// pakai ajax
let xhr = new XMLHttpRequest();

// ketika ajaxnya sudah siap lakukan fungsi
xhr.onreadystatechange = function () {
  // Saat readyState mencapai 4 (DONE) dan status adalah 200 (OK), artinya permintaan HTTP berhasil, dan respon dari server siap untuk diproses.
  if (xhr.readyState === 4 && xhr.status === 200) {
    // buat variabel mahasiswa yang didalamnya berisi respon dari ajax atau xhr, lalu kita console
    // respon dari ajax kita lakukan JSON.parse() agar bisa jadi objek.
    let mahasiswa = JSON.parse(this.responseText);
    console.log(mahasiswa);
  }
};
// supaya dijalankan secara asynchronous maka kita berikan true pada method .open(), karna ajax berjalan secara asynchronous.
xhr.open("GET", "data.json", true);
xhr.send();
