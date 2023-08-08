// file index.js akan menjadi file entry point atau awal titik masuk dari program aplikasi

// import modul
import { AlertService } from "./app/alert.service.js";
import { CalculatorService } from "./app/calculator.service.js";
import { JokesService } from "./app/jokes.service.js";
import { run } from "./app/app.js";

// buat instance objek
const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

// jalankan fungsi
run(alertService, calculatorService, jokesService);
