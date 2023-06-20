// contoh custom function dengan argumen
// kita bisa menambahkan lebih dari 1 argumen dengan memberikan tanda koma antar variabel argumennya.

function greeting(name, language) {
  if (language == "english") {
    console.log("good morning " + name + "!");
  } else if (language == "french") {
    console.log("bonjour " + name + "!");
  } else {
    console.log("selamat pagi " + name + "!");
  }
}

// pemanggilan fungsi
greeting("muni", "french");
