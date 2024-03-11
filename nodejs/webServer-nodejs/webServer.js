// menggunakan core module node js untuk membuat sebuah web server, yaitu yang bernama http.
const http = require("http");

http
  .createServer((request, response) => {
    response.write("hello world");
    // response.end() -> untuk memberitahu bahwa perintah dalam server sudah selesai.
    response.end();
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000...");
  });

// listen() -> method untuk menjalankan servernya.

//   jalankan dengan
// node ./webServer
// http://localhost:3000/ => pada google chrome
