// expression function bisa disimpan dalam sebuah variabel.
// pada expression function umumnya kita tidak perlu menuliskan nama fungsinya.
// fungsi yang tidak bernama dikenal dengan anonymous function.

const greeting = function (name, language) {
  if (language == "english") {
    return "good morning " + name + "!";
  } else if (language == "french") {
    return "bonjour " + name + "!";
  } else {
    return "selamat pagi " + name + "!";
  }
};

console.log(greeting("muni", "french"));
