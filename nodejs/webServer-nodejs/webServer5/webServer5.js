const http = require("http");
const fs = require("fs");
const port = 3000;

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-type": "text/html",
    });

    const url = request.url;
    if (url === "/about") {
      response.write("<h1>ini adalah halaman about</h1>");
      response.end();
    } else if (url === "/contact") {
      response.write("<h1>ini adalah halaman contact</h1>");
      response.end();
    } else {
      fs.readFile("./webServer5/webServer5.html", (error, data) => {
        if (error) {
          response.writeHead(404);
          response.write("Error : file not found");
        } else {
          response.write(data);
        }
        response.end();
      });
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });

// jalankan dengan
// node ./webServer5/webServer5
// http://localhost:3000/ => pada google chrome
