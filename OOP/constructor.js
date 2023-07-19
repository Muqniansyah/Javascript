// class ini memisahkan constructornya dan ditempatkan pada body class menggunakan method spesial yang dinamakan constructor.

class Car {
  // konstruktor
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
  }
}

/*
constructor biasanya hanya digunakan untuk menetapkan nilai awal pada properti 
berdasarkan nilai yang dikirimkan pada constructor. Namun sebenarnya kita juga dapat menuliskan logika 
di dalam constructor jika memang kita memerlukan beberapa kondisi sebelum nilai properti diinisialisasi.
*/

/*
Konteks dalam class, keyword this merujuk pada  instance dari class tersebut. 
Sehingga this dapat digunakan untuk mengelola properti yang terdapat pada instance.
*/
