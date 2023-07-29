//pembuatan custom element dengan javascript class
class ImageFigure extends HTMLElement {
  constructor() {
    super();
    console.log("constructed!");
  }

  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || null;
    this.caption = this.getAttribute("caption") || null;
    this.render();
    console.log("connected!");
  }

  render() {
    this.innerHTML = `
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

  disconnectedCallback() {
    console.log("disconnected!");
  }

  adoptedCallback() {
    console.log("adopted!");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
    console.log(`Attribute: ${name} changed!`);
  }

  // digunakan untuk mengamati perubahan nilai attribute caption
  /* kita bisa menetapkan lebih dari satu atribut yang diamati.
         dengan memisahkan nama atribut menggunakan koma. Contoh: */

  // return ['caption', 'title', 'src', ...]
  static get observedAttributes() {
    return ["caption", "src", "alt"];
  }
}

//cara memanggil dan mendefinisikan custom element serta beri tahu bahwa terdapat HTML tag baru
customElements.define("image-figure", ImageFigure);
