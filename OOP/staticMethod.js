// Static method merupakan method yang tidak dapat dipanggil oleh instance dari class, namun dapat dipanggil melalui class-nya sendiri.
// Pada ES6 class kita dapat membuat static method dengan menambahkan keyword static sebelum deklarasi method-nya.

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
    console.log(`Kendaraan ${this.licensePlate} Melaju!`);
  }

  openDoor() {
    console.log(`Membuka pintu!`);
  }
}

class VehicleFactory {
  // menambahkan keyword static sebelum deklarasi method-nya
  static repair(vehicles) {
    vehicles.forEach((vehicle) => {
      console.log(
        `Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`
      );
    });
  }
}

// instance
const car = new Car("H121s", "Honda", 4);

// Kemudian untuk memanggil methodnya kita bisa panggil melalui class VehicleFactory kemudian repair().
// pemanggilan method dan function
VehicleFactory.repair([car]);
