// file index.js akan menjadi file entry point atau awal titik masuk dari program aplikasi

// import modul
const AlertService = require("./app/alert.service");
const CalculatorService = require("./app/calculator.service");
const JokesService = require("./app/jokes.service");
const run = require("./app/app");

// buat instance objek
const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

// jalankan fungsi
run(alertService, calculatorService, jokesService);
