function generarPaginaProducto(producto) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${producto.nombre}</title>
      <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
      <header>
        <h1>${producto.nombre}</h1>
        <nav>
          <ul>
            <li><a href="../index.html">Volver a la tienda</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 300px;">
        <h2>Descripción</h2>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
      </section>

      <footer>
        <p>&copy; 2024 Tienda Online</p>
      </footer>
    </body>
    </html>
  `;
}

function generarPaginasProductos() {
  fetch('products.json')
    .then(response => response.json())
    .then(productos => {
      productos.forEach(producto => {
        const contenidoPagina = generarPaginaProducto(producto);

        const blob = new Blob([contenidoPagina], { type: 'text/html' });
        const enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = `product${producto.id}.html`;
        enlace.click();
      });
    })
    .catch(error => console.error("Error al generar las páginas de producto:", error));
}

document.addEventListener('DOMContentLoaded', generarPaginasProductos);
