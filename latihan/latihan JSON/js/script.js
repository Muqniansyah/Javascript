// buat fungsi yang didalamnya menampung cara tampilkan json jadi objek dengan ajax lalu munculkan pada halaman web.
function tampilkanSemuaMenu() {
  // $.getJSON() untuk menyingkat $.ajax()
  $.getJSON("data/pizza.json", function (data) {
    //   console.log(data); untuk melihat data sudah berhasil jadi object

    // kelola data
    // untuk akses menu dalam json yang sudah jadi objek
    let menu = data.menu;

    // method jquery yang berupa $.each() untuk melakukan perulangan atau untuk melakukan looping terhadap objek.
    //   arti kode : ambil semua elemen pada menu, lalu tiap elemen pada menu berikan fungsi
    $.each(menu, function (index, data) {
      // cari id daftar menu lalu tambahkan diakhirnya dengan method .append() sebuah elemen baru yaitu : string html berbentuk card
      // didalam append() jangan lupa untuk menghapus spasi dan enter supaya jadi string html. dan pastikan dimulai dengan kutip 1 karna htmlnya ada kutip 2 atau bisa pakai backtick. dan untuk memanggil objek json dengan memakai template literals.
      $("#daftar-menu").append(
        `<div class="col-md-4"><div class="card mb-3" >
          <img src="img/menu/${data.gambar}" class="card-img-top">
          <div class="card-body"><h5 class="card-title">${data.nama}</h5>
            <p class="card-text">${data.deskripsi}</p>
            <h5 class="card-price">${data.harga}</h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a></div>
          </div>
        </div>`
      );
    });
  });
}

// jalankan fungsi
tampilkanSemuaMenu();

// ambil class nav-link lalu berikan event click dan pada saat diklik jalankan fungsi berikut ini
$(".nav-link").on("click", function () {
  // cari class nav-link lalu hilangkan class active
  $(".nav-link").removeClass("active");
  // cari class nav-link yang diklik lalu tambah class active
  $(this).addClass("active");

  // buat variabel kategori yang berisi link yang kita click lalu ambil tulisannya dengan .html()
  let kategori = $(this).html();
  // cari h1 lalu ganti htmlnya dengan variabel kategori
  $("h1").html(kategori);

  // jika kategori yang dipilih all menu
  if (kategori == "All Menu") {
    // untuk menghilangkan data sebelumnya
    $("#daftar-menu").html("");
    // jalankan fungsi
    tampilkanSemuaMenu();
    // menghentikan eksekusi kode di dalam fungsi $(".nav-link").on("click", function () atau setelah fungsi tampilkanSemuaMenu() selesai dijalankan, eksekusi kode dalam event listener akan berhenti dan tidak akan melanjutkan eksekusi kode di bawahnya.
    return;
  }

  // jika linknya diklik lakukan ajax untuk rubah json jadi objek
  $.getJSON("data/pizza.json", function (data) {
    // untuk akses menu dalam json yang sudah jadi objek
    let menu = data.menu;
    // buat variabel content yang berisi string kosong
    let content = "";

    //   arti kode : ambil semua elemen pada menu, lalu tiap elemen pada menu berikan fungsi
    $.each(menu, function (index, data) {
      // jika kategori json sama dengan variabel kategori yang diklik maka jalankan. tapi sebelumnya ubah dulu variabel kategori yang diklik jadi huruf kecil dengan .toLowerCase()
      if (data.kategori == kategori.toLowerCase()) {
        // gabungkan string content dengan string htmlnya / kita isi contentnya
        content += `<div class="col-md-4"><div class="card mb-3" ><img src="img/menu/${data.gambar}" class="card-img-top"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h5 class="card-price">${data.harga}</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>`;
      }
    });

    // ambil id daftar menu lalu timpa htmlnya dengan variabel content yang sudah diisi tadi
    $("#daftar-menu").html(content);
  });
});
