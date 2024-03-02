const http = require("http");
const port = 1234;

http
  .createServer((request, response) => {
    response.write("Hello world");
    response.end();
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });

// jalankan dengan
// node ./webServer2
// http://localhost:1234/ => pada google chrome
