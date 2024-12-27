document.addEventListener("DOMContentLoaded", function () {
  // Cargar productos desde el archivo JSON
  fetch('products.json')
    .then(response => response.json())
    .then(productos => {
      const listaProductos = document.getElementById("productos-lista");
      // Verifica si hay productos
      if (productos.length > 0) {
        productos.forEach(producto => {
          // Crear el HTML para cada producto
          const productoHTML = `
            <div class="producto">
              <h3><a href="products/product${producto.id}.html">${producto.nombre}</a></h3>
              <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 200px;">
              <p>$${producto.precio}</p>
              <button onclick="añadirAlCarrito(${producto.id})">Añadir al carrito</button>
            </div>
          `;
          listaProductos.innerHTML += productoHTML;
        });
      } else {
        listaProductos.innerHTML = "<p>No hay productos disponibles en este momento.</p>";
      }
    })
    .catch(error => {
      console.error("Error al cargar los productos:", error);
    });
});

// Función para añadir un producto al carrito
function añadirAlCarrito(productoId) {
  // Implementar lógica de carrito (por ejemplo, usando localStorage)
  console.log(`Producto ${productoId} añadido al carrito`);
}
