let carrito = [];

function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoLista = document.getElementById("carrito-lista");
  carritoLista.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    carritoLista.appendChild(li);
  });
}
