// Melalui objek class kita juga dapat mengubah nilai properti seperti ini:

class Car {
  // konstruktor
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
  }
}
// instance
const johnCar = new Car("Honda", "Red");
console.log(`Warna mobil: ${johnCar.color}`); // output -> Warna Mobil: Red

johnCar.color = "White"; // Mengubah nilai properti color menjadi white
console.log(`Warna mobil: ${johnCar.color}`); // output -> Warna Mobil: White
