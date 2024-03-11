const http = require("http");
const fs = require("fs");
const port = 3000;

const renderHtml = (path, response) => {
  fs.readFile(path, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.write("Error : file not found");
    } else {
      response.write(data);
    }
    response.end();
  });
};

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-type": "text/html",
    });

    const url = request.url;
    if (url === "/about") {
      renderHtml("./webServer7/about.html", response);
    } else if (url === "/contact") {
      renderHtml("./webServer7/contact.html", response);
    } else {
      renderHtml("./webServer7/index.html", response);
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });

// jalankan dengan
// node ./webServer7/webServer7
// http://localhost:3000/ => pada google chrome
