/*
Fungsi fetch() dapat menerima dua buah parameter di dalamnya. Selain menetapkan target URL, kita juga dapat memberikan options untuk menetapkan method, header, body, dsb pada request yang akan dijalankan. 
Namun penerapan options ini bersifat pilihan. Tidak wajib.
*/

fetch("https://randomuser.me/", {
  // ubah method request
  method: "POST",
  // Menetapkan Header Property
  headers: {
    // dapat menetapkan lebih dari satu properti pada headers
    "Content-Type": "application/json",
    "X-Auth-Token": "12345",
  },
  // Sama seperti XHR, data yang dikirimkan melalui body request perlu diubah menjadi JSON String terlebih dahulu.
  // Menetapkan Data pada Body Request
  body: JSON.stringify({
    id: 10,
    title: "suara kami",
    author: "Muni",
  }),
});

// Penggunaan fetch() tanpa menerapkan options akan membuat GET request sederhana yang ditujukan pada targetUrl.
