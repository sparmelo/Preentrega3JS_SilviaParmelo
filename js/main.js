let nombreApellido = prompt ('Ingrese su nombre y apellido');
console.log (nombreApellido);


// Definir algunos muebles de ejemplo de productos con su precio
const products = [
    { id: 1, name: "Sofa", price: 500000 },
    { id: 2, name: "Mesa de café", price: 200000 },
    { id: 3, name: "Mesa de comedor", price: 700000 },
    { id: 4, name: "Cama dormitorio madera y beige", price: 900000 },
    { id: 5, name: "Estantería", price: 300000 }
  ];
  
  // Inicializar un carrito de compra vacío
  let shoppingCart = [];
  
  // Función para mostrar productos disponibles
  function displayProducts() {
    console.log("Productos Disponibles:");
    products.forEach(product => {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
  }
  
  // Función para agregar un producto al carrito
  function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
      shoppingCart.push(product);
      console.log(`${product.name} agregado al carrito.`);
    } else {
      console.log("Producto no encontrado.");
    }
  }
  
  // Función para mostrar el contenido del carrito de compras
  function displayCart() {
    console.log("Carrito de compras:");
    if (shoppingCart.length === 0) {
      console.log("Su carrito está vacío.");
    } else {
      shoppingCart.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price}`);
      });
      const totalPrice = shoppingCart.reduce((total, product) => total + product.price, 0);
      console.log(`Precio Total: $${totalPrice.toFixed(2)}`);
    }
  }
  
  // Uso
  displayProducts();
  addToCart(1); // Agregar Sofa al carrito
  addToCart(2); // Agregar Mesa de café al carrito
  displayCart();

  // Filtrar productos basados en el precio
function filterProductsByPrice(price) {
  const filteredProducts = products.filter(product => product.price <= price);
  console.log(`Productos por debajo o igual a $${price}:`);
  filteredProducts.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

filterProductsByPrice(600000); // Ejemplo de uso del filtro por precio