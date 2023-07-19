// Default Values pada array

/* pada array destructuring kita juga dapat memberikan nilai default pada variabel yang tidak dapat 
terjangkau oleh array sehingga nilai pada variabel tidak akan menjadi undefined.*/

const favorite = ["ice cream"];

const [myFood, herFood = "pizza"] = favorite;

console.log(myFood);
console.log(herFood);
