// buat http server
const http = require("http");

const requestListener = (request, response) => {
  //buat response header
  response.setHeader("Content-Type", "application/json");
  response.setHeader("X-Powered-By", "NodeJS");
  //akhir dari response header

  // handling request/method dari permintaan client
  //routing request dengan property url
  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      //status code pada respons bila berhasil
      response.statusCode = 200;
      // response body bila client menggunakan GET
      response.end(
        JSON.stringify({
          message: "Ini adalah homepage",
        })
      );
    } else {
      //status code pada respons bila tidak bisa diakses oleh method tertentu
      response.statusCode = 400;
      // response body bila client tidak menggunakan GET
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      //status code pada respons bila berhasil
      response.statusCode = 200;
      // respons body bila client menggunakan GET
      response.end(
        JSON.stringify({
          message: "Halo! Ini adalah halaman about",
        })
      );
    } else if (method === "POST") {
      // respons bila client menggunakan POST
      // logika stream untuk buat body request
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        /*
          data body siap dikonsumsi hanya ketika event end telah dibangkitkan. 
          Dalam arti lain, server tidak akan mengirimkan respons bila proses stream belum selesai.
          */
        const { name } = JSON.parse(body);
        //status code pada respons bila berhasil
        response.statusCode = 200;
        //response body
        response.end(
          JSON.stringify({
            message: `Halo, ${name}! Ini adalah halaman about`,
          })
        );
        // akhir dari logika stream
      });
    } else {
      //status code pada respons bila tidak bisa diakses oleh method tertentu
      response.statusCode = 400;
      // respons body bila client tidak menggunakan GET ataupun POST
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses menggunakan ${method}, request`,
        })
      );
    }
  } else {
    //status code pada respons bila halaman tidak ditemukan
    response.statusCode = 404;
    // body response
    response.end(
      JSON.stringify({
        message: "Halaman tidak ditemukan!",
      })
    );
  }
  // akhir handling request
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
//akhir http server
