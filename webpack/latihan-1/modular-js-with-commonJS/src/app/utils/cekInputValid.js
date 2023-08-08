const cekInputValid = (...angka) => {
  return angka.every((num) => typeof num === "number" && !isNaN(num));
};

// exports module
module.exports = cekInputValid;
