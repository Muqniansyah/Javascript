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

    // dengan menggunakan switch
    switch (url) {
      case "/about":
        renderHtml("./webServer8/about.html", response);
        break;
      case "/contact":
        renderHtml("./webServer8/contact.html", response);
        break;
      default:
        renderHtml("./webServer8/index.html", response);
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });

// jalankan dengan
// node ./webServer8/webServer8
// http://localhost:3000/ => pada google chrome
