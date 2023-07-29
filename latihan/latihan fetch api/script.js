// script.js
const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto"; // Ganti dengan URL API yang sesuai

// Fungsi untuk mengambil data dari API
function fetchData() {
  fetch(apiUrl)
    //   callback function
    .then((response) => response.json())
    .then((data) => {
      // Menampilkan data dalam elemen dengan ID "data-container"
      const dataContainer = document.getElementById("data-container");
      dataContainer.innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      // Menampilkan pesan error jika terjadi masalah saat mengambil data dari API
      const dataContainer = document.getElementById("data-container");
      dataContainer.innerText =
        "Terjadi kesalahan saat mengambil data dari API.";
    });
}

// Panggil fungsi fetchData() saat halaman selesai dimuat
window.onload = fetchData;
