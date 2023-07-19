// Keyword super digunakan untuk mengakses properti dan method yang ada pada induk class ketika berada pada child class.

/*
Penggunaan super sangat berguna ketika kita hendak menjalankan method overriding pada method parent. 
Contohnya kita akan melakukan method overriding pada method info() dengan menambahkan informasi jumlah roda pada mobil
*/

class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;
  }

  startEngines() {
    console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
  }

  info() {
    console.log(`Nomor Kendaraan: ${this.licensePlate}`);
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
  }

  parking() {
    console.log(`Kendaraan ${this.licensePlate} parkir!`);
  }
}

class Car extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    super(licensePlate, manufacture);
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan ${this.licensePlate} melaju!`);
  }

  openDoor() {
    console.log(`Membuka pintu!`);
  }

  /* overriding method info dari parent class */
  info() {
    super.info(); // Mengakses method info() dari parent class
    console.log(`Jumlah roda: ${this.wheels}`);
  }
}

const johnCar = new Car("H121S", "Honda", 4);
johnCar.info();

/*
Dalam melakukan pewarisan kelas, tidak ada tingkatan yang membatasinya. 
Maksudnya, kita dapat mewariskan sifat kelas A pada kelas B, lalu kelas B mewarisi sifatnya kembali pada kelas C dan selanjutnya. 
Sama halnya dengan Nenek kita mewarisi sifatnya kepada orang tua kita kemudian orang tua kita mewarisi sifatnya kepada kita. 
*/

/*overriding method yaitu fitur dimana child/kelas anak/subclass menyediakan implementasi spesifik dari metode yang 
sudah disediakan oleh salah satu parent/kelas induk/superclass.
*/
