// array menggunakan tanda kurung siku [ ].
// destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.

const favorite = ["seafood", "salad", "nugget"];

/* dalam array tersebut (favorite) terdapat 3 (tiga) nilai string yang masing-masing nilainya dimasukkan 
ke variabel lokal firstFood, secondFood, thirdFood. nama dari variabel lokal bisa apa saja. 
Yg penting urutan ketika deklarasi variabelnya saja.*/
const [firstFood, secondFood, thirdFood] = favorite;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
