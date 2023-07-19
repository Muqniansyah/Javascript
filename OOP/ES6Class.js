// Pembuatan class pada ES6 menggunakan keyword class itu sendiri kemudian diikuti dengan nama class-nya.

class car {
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

// eksport modules
module.exports = car;
