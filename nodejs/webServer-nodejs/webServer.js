const http = require("http");

http
  .createServer((request, response) => {
    response.write("hello world");
    response.end();
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000...");
  });

//   jalankan dengan
// node ./webServer
// http://localhost:3000/ => pada google chrome
