// Spread operator dapat digunakan untuk menggabungkan dua buah array dalam objek array baru.

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);
