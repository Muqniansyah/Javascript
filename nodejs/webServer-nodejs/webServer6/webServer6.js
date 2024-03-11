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
      fs.readFile("./webServer6/about.html", (error, data) => {
        if (error) {
          response.writeHead(404);
          response.write("Error : file not found");
        } else {
          response.write(data);
        }
        response.end();
      });
    } else if (url === "/contact") {
      response.write("<h1>ini adalah halaman contact</h1>");
      response.end();
    } else {
      fs.readFile("./webServer6/index.html", (error, data) => {
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
// node ./webServer6/webServer6
// http://localhost:3000/ => pada google chrome
