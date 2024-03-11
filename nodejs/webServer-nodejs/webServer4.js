const http = require("http");
const port = 3000;

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-type": "text/html",
    });

    // untuk mengelola jika ingin kehalaman yang lain, caranya kita bikin secara manual.
    // caranya yaitu kita cek terlebih dahulu urlnya apa lalu kita tulis secara manual atau istilahnya membuat sistem routing sendiri.
    const url = request.url;
    if (url === "/about") {
      response.write("<h1>ini adalah halaman about</h1>");
      response.end();
    } else if (url === "/contact") {
      response.write("<h1>ini adalah halaman contact</h1>");
      response.end();
    } else {
      response.write("hello world");
      response.end();
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });

// jalankan dengan
// node ./webServer4
// http://localhost:3000/ => pada google chrome
