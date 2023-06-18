// contoh dari switch case statement

let bahasa = "prancis";
let salam = null;

switch (bahasa) {
  case "inggris":
    salam = "good morning";
    break;
  case "prancis":
    salam = "bonjour";
    break;
  case "jepang":
    salam = "ohayou gozaimasu";
    break;
  default:
    salam = "selamat pagi";
}

console.log(salam);
