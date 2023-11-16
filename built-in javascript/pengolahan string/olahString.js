// Contoh string
let kalimat = "Ini adalah contoh string untuk pengolahan.";

// Mengembalikan panjang string
let panjangString = kalimat.length;
console.log("Panjang String:", panjangString);

// Mengonversi string ke huruf kecil
let hurufKecil = kalimat.toLowerCase();
console.log("String ke Huruf Kecil:", hurufKecil);

// Mengonversi string ke huruf besar
let hurufBesar = kalimat.toUpperCase();
console.log("String ke Huruf Besar:", hurufBesar);

// Mengembalikan indeks pertama dari substring 'contoh'
let indeksSubstring = kalimat.indexOf("contoh");
console.log("Indeks Substring:", indeksSubstring);

// Memecah string menjadi array berdasarkan spasi
let arrayKata = kalimat.split(" ");
console.log("Array Setelah Memecah:", arrayKata);
