const http = require("http");
const port = 3000;

http
  .createServer((request, response) => {
    // membuat content-type menjadi html bukan plain text
    response.writeHead(200, {
      "Content-type": "text/html",
    });

    response.write("Hello world! im muni");
    response.end();
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });

// jalankan dengan
// node ./webServer3
// http://localhost:3000/ => pada google chrome
