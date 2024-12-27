document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-producto");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const imagen = document.getElementById("imagen").value;

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      descripcion,
      precio,
      imagen
    };

    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(productos));

    alert("Producto añadido correctamente.");
    formulario.reset();
  });
});
