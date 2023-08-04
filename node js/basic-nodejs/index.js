const message = (name) => {
  console.log(`Hello ${name}`);
};

message("JavaScript");

// objek process
// mendapatkan informasi tentang penggunaan CPU ketika proses berjalan.
const cpuInformation = process.memoryUsage();
console.log(cpuInformation);
