// Assigning to Different Local Variable Names

/*
Namun dalam mendestruksikan objek kita bisa menggunakan penamaan variabel lokal yang berbeda.
ES6 menyediakan sintaks tambahan yang membuat kita dapat melakukan hal tersebut. 
Penulisannya mirip seperti ketika kita membuat properti beserta nilainya pada object. 
*/

const profile = {
  firstName: "muqni",
  lastName: "arifin",
  age: 20,
};

const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
