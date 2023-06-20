/*
Gunakanlah tanda backticks (`) untuk menggantikan tanda single quotes (‘) atau double quotes (“) yang digunakan sebelumnya. 
Template literals juga dapat mengandung sebuah expression dengan menuliskannya di dalam tanda ${expression}. 
*/

const user = {
  firstName: "Muqniansyah",
  lastName: "Arifin",
  age: 19,
};

const admin = {
  name: "muni",
  position: "developer",
};

// cara aksesnya
console.log(`Nama: ${user.firstName} ${user.lastName}, umur: ${user.age}`);

// Template literals juga dapat membaca line space secara langsung tanpa harus menggunakan escape character.
const message = `Dear, ${user.firstName} ${user.lastName}
 
	Selamat ulang tahun yang ke-${user.age} semoga selalu diberikan kesehatan.
 
	Best Regards,
	${admin.name}
	${admin.position}`;

console.log(message);
