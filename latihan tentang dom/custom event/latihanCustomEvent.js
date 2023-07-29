// Membuat peristiwa kustom
const customEvent = new CustomEvent("namaPeristiwa", {
  detail: { data: "Data tambahan" },
});

// Mendapatkan elemen tombol dan output
const btnTrigger = document.getElementById("btnTrigger");
const outputDiv = document.getElementById("output");

// Mendengarkan peristiwa kustom
btnTrigger.addEventListener("namaPeristiwa", function (event) {
  // Ketika peristiwa kustom dipicu, fungsi ini akan dijalankan
  const dataTambahan = event.detail.data;
  outputDiv.textContent = `Peristiwa kustom dipicu! Data tambahan: ${dataTambahan}`;
});

// Memicu peristiwa kustom saat tombol diklik
btnTrigger.addEventListener("click", function () {
  // Pemicu peristiwa kustom
  btnTrigger.dispatchEvent(customEvent);
});

/*Dalam contoh di atas, ketika halaman web dimuat, peristiwa kustom dengan nama 'namaPeristiwa' dan
data tambahan '{ data: 'Data tambahan' }' dibuat menggunakan CustomEvent. Kemudian, 
saat tombol dengan id 'btnTrigger' diklik, peristiwa kustom tersebut dipicu dengan menggunakan dispatchEvent.
Ketika peristiwa kustom dipicu, fungsi event listener akan dijalankan dan 
menampilkan teks "Peristiwa kustom dipicu! Data tambahan: {Data tambahan}" di dalam elemen dengan id 'output'.*/
