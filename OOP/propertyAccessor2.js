// getter and setter pada class

class Car {
  // konstruktor
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this._color = color; // mengubah properti asli class-nya dengan menambahkan underscore di depan nama propertinya (_color).
    this.engineActive = false;
  }

  // getter
  get color() {
    return `warna mobil : ${this._color}`;
  }

  //setter
  set color(value) {
    console.log(`Warna mobil diubah dari ${this._color} menjadi ${value} `);
    this._color = value;
  }
}

// instance
const johnCar = new Car("honda", "red");

console.log(johnCar.color); //output -> warna mobil : red

johnCar.color = "white"; // Mengubah nilai properti color menjadi white

console.log(johnCar.color); //output -> warna mobil : white

/*
Perhatikan juga ketika kita menerapkan getter/setter pada properti class. 
Kita perlu mengubah atau membedakan penamaan properti aslinya dengan property accessor yang kita buat. 
Berdasarkan code convention yang ada kita perlu mengubah properti asli class-nya dengan menambahkan 
underscore di depan nama propertinya (_color). Tanda underscore berfungsi sebagai tanda bahwa properti _color tidak sebaiknya diakses langsung, 
tetapi harus melalui property accessor (getter/setter).
*/
