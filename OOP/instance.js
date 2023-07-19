/* Instance merupakan objek yang memiliki properti dan method yang telah ditentukan oleh blueprint-nya (class),
atau singkatnya adalah objek yang merupakan hasil realisasi dari sebuah blueprint.*/

// untuk membuat instance dari class pada ES6 kita wajib gunakan keyword new.

class Car {
  // konsturktor
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
  }
}

// instance
/*
Kita juga dapat membuat banyak instance dari class yang sama, dan tentunya objek yang kita buat memiliki karakteristik (properti dan method) 
yang sama. Walaupun sama, tetapi nilai dari propertinya bersifat unik atau bisa saja berbeda. 
*/
const johnCar = new Car("Honda", "Red");
const adamCar = new Car("Tesla", "Black");

// output
console.log(johnCar.manufacture);
console.log(adamCar.manufacture);
