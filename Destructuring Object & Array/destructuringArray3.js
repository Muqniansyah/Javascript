// Destructuring Assignment pada array
// tidak seperti objek, kita tidak perlu membungkusnya pada tanda kurung.

const favorite = ["seafood", "noodle", "nugget"];

let myFood = "Ice cream";
let herFood = "Soup";

[myFood, herFood] = favorite;

console.log(myFood);
console.log(herFood);
