// a adalah global variabel dapat diakses pada fungsi parent() dan child().
const a = "huruf a";

function parent() {
  // b adalah lokal variabel dapat diakses pada parent() dan child(), tapi tidak dapat diakses diluar dari fungsi tersebut.
  const b = "huruf b";
  function child() {
    // c adalah lokal variabel dapat diakses hanya pada fungsi child().
    const c = "huruf c";
  }
}
