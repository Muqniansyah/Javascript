// Karena fetch memanfaatkan promise, kita bisa memanfaatkan async/await jika Anda lebih suka dengan gaya penulisan synchronous.
async function getBooks() {
  // function handle callback
  try {
    const response = await fetch("https://reqres.in/");
    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.log(error);
  }
}

getBooks();
