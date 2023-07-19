// Kita juga bisa memilih nilai pada index tertentu untuk didestruksikan pada array.
// Kita bisa melakukannya dengan membiarkan index array yang kita tidak inginkan tetap kosong (tanpa menulis variabel lokal). Lebih lanjut, tanda koma tetap (,) tetap diperlukan untuk menunjukkan posisi index-nya.

const favorite = ["seafood", "salad", "nugget"];

const [, , thirdFood] = favorite;

console.log(thirdFood);
