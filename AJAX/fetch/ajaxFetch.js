// Network request dilakukan pada saat fungsi fetch() tereksekusi.
fetch("https://reqres.in/")
  // untuk mendapatkan data JSON yang dibutuhkan, kita perlu mengubah response object ke dalam bentuk JSON dengan memanggil method json().
  .then((response) => {
    return response.json();
  })
  // membutuhkan chaining promise dengan menambahkan then() untuk mendapatkan data JSON yang sesungguhnya.
  .then((responseJson) => {
    console.log(responseJson);
  })
  // menambahkan block catch() pada akhir chaining promise untuk menangani apabila rejected promise terjadi, baik dikarenakan fungsi fetch() atau json().
  .catch((error) => {
    console.log(error);
  });

/*Jika request berhasil diproses oleh server, fungsi fetch() akan mengembalikan promise resolve dan membawa response object di dalamnya.
Namun nilai response yang dibawa resolve belum sebagai data JSON yang kita butuhkan, 
melainkan informasi mengenai response itu sendiri, seperti status code, target url, headers, dsb.*/
