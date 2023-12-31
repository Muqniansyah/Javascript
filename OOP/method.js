// Untuk menambahkan method pada class, kita juga cukup menuliskannya pada body class

class Car {
  // konstruktor
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.engineActive = false;
  }

  // method dan function
  // pembuatan method dan function didalam class tidak perlu menuliskan 'function' pada pembuatan fungsinya.
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
