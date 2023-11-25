const product = [
  {
    id: 0,
    image: "img/kaos.jpg",
    title: "baju-1",
    price: 120,
  },
  {
    id: 1,
    image: "img/kaos.jpg",
    title: "baju-2",
    price: 220,
  },
  {
    id: 2,
    image: "img/kaos.jpg",
    title: "baju-3",
    price: 140,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    let { image, title, price } = item;
    return (
      `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
         </div>`
    );
  })
  .join("");

let cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

function displayCart(a) {
  let j = 0;
  let total = 0;

  document.getElementById("count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        let { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = `$ ${total}.00`;
        return (
          `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}'></img>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
          "<i class='bi bi-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
