// Definir algunos muebles de ejemplo de productos con su precio
const contenedorProductos = [
  { id: 1, name: "Modular", imagen: "./img/prodSalon.png", categoria: { name: "Salón", id: "salón" }, price: 500000 },
  { id: 2, name: "Dormitorio madera y beige", imagen: "./img/prodDormitorioMAderaYBeige.jpeg", categoria: { name: "Dormitorio", id: "dormitorio" }, price: 700000 },
  { id: 3, name: "Cocina combinada rojo blanco y madera", imagen: "./img/prodCocinaRojoBlancoYMadera.jpeg", categoria: { name: "Cocina", id: "cocina" }, price: 900000 },
  { id: 4, name: "Mesa de café", price: 200000 },
  { id: 5, name: "Estantería", price: 300000 }
];

// Inicializar un carrito de compra vacío
let shoppingCart = [];

// Función para mostrar productos disponibles en el DOM
function displayProducts() {
  const contenedorProductosElement = document.getElementById('contenedorProductos');
  contenedorProductosElement.innerHTML = '';
  contenedorProductos.forEach(product => {
    contenedorProductosElement.innerHTML += `<div>${product.id}. ${product.name} - $${product.price}</div>`;
  });
}

// Función para cargar productos
function cargarProductos() {
  contenedorProductos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="imgProducto" src="${producto.imagen}" alt="${producto.name}">
      <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.name}</h3>
        <p class="producto-precio">$${producto.price}</p>
        <button class="boton-menu add-to-cart" data-product-id="${producto.id}">Agregar al Carrito</button>
      </div>
    `;
    contenedorProductosElement.append(div);
  });
}

cargarProductos();

// Función para agregar un producto al carrito y actualizar el DOM
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (product) {
    shoppingCart.push(product);
    updateCartDisplay();
  } else {
    console.error("Producto no encontrado.");
  }
}

// Función para mostrar el contenido del carrito de compras en el DOM
function updateCartDisplay() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';
  shoppingCart.forEach((product, index) => {
    cartContainer.innerHTML += `<div>${index + 1}. ${product.name} - $${product.price}</div>`;
  });
  const totalPrice = shoppingCart.reduce((total, product) => total + product.price, 0);
  cartContainer.innerHTML += `<div>Precio Total: $${totalPrice.toFixed(2)}</div>`;
}

// Eventos para capturar las entradas del usuario
document.getElementById('products').addEventListener('click', (event) => {
  // Asumiendo que cada producto tiene un botón con id='add-to-cart-{{id}}'
  const isButton = event.target.nodeName === 'BUTTON';
  if (isButton) {
    const productId = parseInt(event.target.id.replace('add-to-cart-', ''));
    addToCart(productId);
  }
});

// Función para almacenar el carrito en el Storage
function saveCartToStorage() {
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

// Función para recuperar el carrito del Storage
function loadCartFromStorage() {
  const storedCart = localStorage.getItem('shoppingCart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
    updateCartDisplay();
  }
}

// Al cargar la página, recuperar el carrito y mostrar los productos
window.onload = () => {
  loadCartFromStorage();
  displayProducts();
};

// Filtrar productos basados en el precio
function filterProductsByPrice(price) {
  const filteredProducts = products.filter(product => product.price <= price);
  console.log(`Productos por debajo o igual a $${price}:`);
  filteredProducts.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

filterProductsByPrice(600000); // Ejemplo de uso del filtro por precio

