const product = [
  {
    id: 0,
    image: "img/kaos.jpg",
    title: "baju",
    price: 120,
  },
  {
    id: 1,
    image: "img/kaos.jpg",
    title: "muslim",
    price: 280,
  },
  {
    id: 2,
    image: "img/kaos.jpg",
    title: "kemeja",
    price: 890,
  },
  {
    id: 3,
    image: "img/kaos.jpg",
    title: "kaos",
    price: 430,
  },
];

const categories = [...new Set(product.map((item) => item.title))];

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = product.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filterData);
});

const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      let { image, title, price } = item;
      return `<div class="box">
                  <div class="img-box">
                      <img class="images" src=${image}></img>
                  </div>
                  <div class="bottom">
                      <p>${title}</p>
                      <h2>$ ${price}.00</h2>
                      <button>Add to cart</button>
                  </div>
              </div>`;
    })
    .join("");
};

displayItem(product);
