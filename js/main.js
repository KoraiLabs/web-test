 document.addEventListener("DOMContentLoaded", function () {
  // Cargar productos desde JSON
  fetch('products.json')
    .then(response => response.json())
    .then(productos => {
      const listaProductos = document.getElementById("productos-lista");
      productos.forEach(producto => {
        const productoHTML = `
          <div>
            <h3><a href="products/product${producto.id}.html">${producto.nombre}</a></h3>
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px;">
            <p>$${producto.precio}</p>
          </div>
        `;
        listaProductos.innerHTML += productoHTML;
      });
    })
    .catch(error => console.error("Error al cargar los productos:", error));
});
