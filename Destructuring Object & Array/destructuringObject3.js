// Default Values pada object (DVO)
// Untuk melakukanya tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai defaultnya seperti ini:

const profile = {
  firstName: "john",
  lastName: "Doe",
  age: 18,
};

const { firstName, age, isMale = false } = profile;
// Dengan menambahkan default value di dalam desctructuting object jika properti tidak ditemukan, maka nilai default (nilai alternatif) akan diterapkan pada variabel.

console.log(firstName);
console.log(age);
console.log(isMale);
