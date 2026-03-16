let products = [
  { id: 1, name: "Watch", price: 3500, image: "https://img.ltwebstatic.com/images3_spmp/2024/06/28/0a/17195589274105c0c2648aa7b263365125a7bdf011_thumbnail_405x552.jpg" },
  { id: 2, name: "Bracelet", price: 1200, image: "https://www.pakstyle.pk/cdn/shop/files/p18091-elegant-fashion-bracelet-for-girls.jpg?v=1759485109" },
  { id: 3, name: "Earrings", price: 2000, image: "https://bagallery.com/cdn/shop/products/1609905220d5db0a00b769478a09e8e249af3e518a_thumbnail_600x_6c65094a-796d-4228-9047-e8f6f4daeb3a.webp?v=1747932856" },
  { id: 4, name: "rings", price: 2800, image: "https://image-cdn.ubuy.com/fasacco-gold-jewelry-set-trendy/400_400_100/6938337402f822e0fc0e6f9b.jpg" },
  { id: 5, name: "Necklace", price: 4500, image: "https://sc04.alicdn.com/kf/H02df1209e6e54735b8503b3dab862d1cj.jpg" },
  { id: 6, name: "pins", price: 4000, image: "https://static-01.daraz.pk/p/586d9f61b9f740c3482d9be9259f3774.jpg" },

];

let cart = [];

function displayProducts(list) {
  const box = document.getElementById("productList");
  box.innerHTML = "";

  list.forEach(p => {
    box.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Rs ${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

displayProducts(products);

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;

  let total = 0;
  let list = "";

  cart.forEach(item => {
    total += item.price;
    list += `<li>${item.name} - Rs ${item.price}</li>`;
  });

  document.getElementById("cartItems").innerHTML = list;
  document.getElementById("cartTotal").textContent = total;
}

document.getElementById("searchBox").addEventListener("input", function () {
  const text = this.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(text)
  );
  displayProducts(filtered);
});

