// contoh dari if/else majemuk

const language = "french";
let greeting = "selamat pagi";

if (language === "english") {
  greeting = "good morning";
} else if (language === "french") {
  greeting = "bonjour";
} else if (language === "japanese") {
  greeting = "ohayogozaimasu";
} else {
  greeting;
}

console.log(greeting);
