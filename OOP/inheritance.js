// jika kita ingin mewariskan sifat class, lakukan dengan keyword extends

// class vehicle  : sebagai super atau parent class
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

// class Car  : sebagai child class dari Vehicle. karna Kelas yang mewarisi sifat dari parent class disebut dengan child class.
class Car extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    super(licensePlate, manufacture); // mengakses constructor dari parent class
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan ${this.licensePlate} Melaju!`);
  }

  openDoor() {
    console.log(`Membuka pintu!`);
  }
}

/*
Dengan begitu, selain properti dan method yang terdapat di dalamnya, 
class Car juga dapat mengakses seluruh properti dan method yang terdapat pada class Vehicle.
*/

// instance
const car = new Car("H121s", "Honda", 4);

// pemanggilan method dan function
car.startEngines();
