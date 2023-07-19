// disini adalah contoh jika class dijalankan pada satu file yang sama dengan pembuatan classnya.

// Pembuatan class pada ES6 menggunakan keyword class itu sendiri kemudian diikuti dengan nama class-nya.
/*
Ketika kita hendak membuat sebuah constructor function ataupun class. Secara code convention (aturan penulisan), 
gunakan PascalCase dalam penamaannya. Contohnya Car daripada car, SportCar daripada sportCar atau Sportcar.
*/
class Car {
  // konstruktor
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.engineActive = false;
  }

  // method dan function
  startEngines() {
    console.log("mobil dinyalakan");
    this.engineActive = true;
  }

  info() {
    console.log(`Manufacture : ${this.manufacture}`);
    console.log(`Color : ${this.color}`);
    console.log(`Engine : ${this.engineActive ? "Active" : "Inactive"}`);
  }
}

// buat instance atau buat objek baru dari class Car
const myCar = new Car("honda", "red");

// pemanggilan method dan function
myCar.startEngines();
myCar.info();
