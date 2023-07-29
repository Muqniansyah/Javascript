class ImageFigure extends HTMLElement {
  /*
Dalam melampirkan Shadow DOM pada custom element sama seperti pada elemen biasanya, 
yaitu menggunakan attachShadow. Namun dalam custom element,
kita akan melakukannya pada constructor class seperti berikut ini.
    */
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  /*
Supaya nilai shadowRoot dapat diakses pada fungsi mana saja di class, maka kita perlu memasukkan nilai kembalian dari fungsi attachShadow() ke properti _shadowRoot melalui keyword this. Kita bebas menentukan nama properti. Namun, kita gunakan nama _shadowRoot untuk memudahkan. 
Lalu, mengapa penamaannya menggunakan tanda underscore (_) di depannya? Jawabannya, keyword this pada konteks class ini merupakan HTMLElement (class ImageFigure) dan ia sudah memiliki properti dari parent class bernama shadowRoot. 
Untuk membedakan properti _shadowRoot asli dengan properti baru yang kita buat, kita bisa tambahkan underscore di awal penamaannya. Hal ini dibutuhkan karena jika kita menerapkan mode closed pada Shadow DOM, nilai properti shadowRoot akan mengembalikan null, 
sehingga tidak ada cara lain untuk kita mengakses Shadow Tree.
*/
  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || null;
    this.caption = this.getAttribute("caption") || null;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
          figure {
            border: thin #c0c0c0 solid;
            display: flex;
            flex-flow: column;
            padding: 5px;
            max-width: 220px;
            margin: auto;
          }
          
          figure > img {
            max-width: 220px;
          }
          
          figure > figcaption {
            background-color: #222;
            color: #fff;
            font: italic smaller sans-serif;
            padding: 3px;
            text-align: center;
          }
        </style>
        
        <figure>
          <img src="${this.src}" alt="${this.alt}">
          <figcaption>${this.caption}</figcaption>
        </figure>
      `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ["caption"];
  }
}

customElements.define("image-figure", ImageFigure);
