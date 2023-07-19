/* Pada objek, keyword this mengembalikan nilai objeknya sendiri. 
this dapat digunakan untuk mengelola properti pada objeknya. Namun jika fungsi dipanggil 
tanpa menggunakan keyword new, keyword this bernilai global object (Window jika di browser).*/

function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

// menambahkan introMyself ke People
People.prototype.intoMyself = function () {
  // this -> People
  setTimeout(function () {
    // this -> ??
    console.log(`Hello! nama saya ${this.name}, Umur saya ${this.age}.`);
    console.log(`Hobby saya adalah ${this.hobby}`);
  }, 300);
};

const programmer = new People("Muqni", 20, ["coding", "basket", "musik"]);
programmer.intoMyself();

/*Jika tidak menyertakan keyword new pada function, maka value this akan bernilai global object (window). 
Itulah mengapa output dari this.name, this.age, dan this.hobby menghasilkan nilai undefined.*/
