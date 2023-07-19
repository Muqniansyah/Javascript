// Block Body Function

/* arrow function sebenarnya tidak benar-benar menghilangkan tanda kurung kurawal ({ }) dalam penulisannya. 
Tanda kurung kurawal pun berfungsi sama seperti regular function yakni menampung body function di mana tempat 
logika fungsi dituliskan.
*/

const sayHello = (language) => {
  if (language.toUpperCase() === "ITALIA") {
    return "Buongiorno";
  } else {
    return "Selamat pagi";
  }
};

console.log(sayHello("italia"));

/*
Penulisan tanda kurung kurawal menjadi opsional ketika body fungsi hanya terdiri dari satu expression 
atau statement saja. atau dalam arti lain tanda kurung kurawal digunakan jika dalam sebuah fungsi 
terdapat banyak logika di dalamnya.
*/
