class Hewan {
  // konstruktor
  constructor(suara) {
    this.suara = suara;
  }
  // method
  info() {
    console.log(`suara : ${this.suara}`);
  }
}

const Ayam = new Hewan("kukuruyuk");
Ayam.info();
