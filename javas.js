
let cart = [];

function showBrands() {
  document.getElementById("brands").classList.remove("hidden");
}

function showPhones(brand) {
  let phones = {
    samsung: [
      "Samsung S24", "Samsung S23", "Samsung S22", "Samsung S21"
    ],
    oppo: [
      "Oppo A15", "Oppo Reno7", "Oppo Reno8", "Oppo FindX"
    ],
    xiaomi: [
      "Redmi Note 12", "Redmi Note 13", "Redmi Note 14", "Redmi Note 11 Pro"
    ],
    apple: [
      "iPhone 16", "iPhone 15", "iPhone 14", "iPhone 13"
    ]
  };

  let container = document.getElementById("phones");
  container.innerHTML = "";

  phones[brand].forEach(phone => {
    container.innerHTML += `
      <div class="phone">
        <div class="phone-icon">📱</div>
        <h3>${phone}</h3>
        <button onclick="addToCart('${phone}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name) {
  cart.push(name);
  document.getElementById("cart-count").innerText = cart.length;

  let list = document.getElementById("cart-items");
  list.innerHTML += <li>${name}</li>;

  document.getElementById("cart-box").classList.remove("hidden");
}

function commander() {
  alert("La commande a été exécutée avec succès");
  cart = [];
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("cart-count").innerText = 0;