class Producto {
  #cod;
  #nombre;
  #precio;
  #imagen;

  constructor(cod, nombre, precio, imagen) {
    this.#cod = cod;
    this.#nombre = nombre;
    this.#precio = precio;
    this.#imagen = imagen;
  }

  mostrar() {
    return {
      cod: this.#cod,
      nombre: this.#nombre,
      precio: this.#precio,
      imagen: this.#imagen,
    };
  }
}

// Estamos haciendo una "recreación" de una consulta a la base de datos
var productos = [
  new Producto(
    1,
    "Renault Megane",
    15000,
    "https://source.unsplash.com/random/400x400/?renault-megane"
  ),
  new Producto(
    2,
    "Vestido Rojo",
    29.99,
    "https://source.unsplash.com/random/400x400/?red-dress"
  ),
  new Producto(
    3,
    "Taza café",
    6.99,
    "https://source.unsplash.com/random/400x400/?cup-coffee"
  ),
  new Producto(
    4,
    "Cámara reflex",
    699.99,
    "https://source.unsplash.com/random/400x400/?canon-camera"
  ),
  new Producto(
    5,
    "Iphone 8",
    299.99,
    "https://source.unsplash.com/random/400x400/?iphone-8"
  ),
  new Producto(
    6,
    "PlayStation 5",
    499.99,
    "https://source.unsplash.com/random/400x400/?playstation-5"
  )
];

class Cesta {
  #arrayCesta = [];
  enviarCesta(idBoton) {
    let cantidad = document.querySelector(
      "input[data-iduni='" + idBoton + "']"
    );
    const productoSeleccionado = productos.find(
      (producto) => producto.mostrar().cod === idBoton
    );

    if (productoSeleccionado && cantidad.value > 0) {
      this.agregarProducto(productoSeleccionado, parseInt(cantidad.value));
    }
  }

  agregarProducto(producto, cantidad) {
    const productoEnCesta = this.#arrayCesta.find(
      (item) => item.id === producto.mostrar().cod
    );

    if (productoEnCesta) {
      productoEnCesta.cantidad += cantidad;
    } else {
      this.#arrayCesta.push({ id: producto.mostrar().cod, cantidad });
    }

    this.renderizarCesta();
  }

  eliminarProducto(producto) {
    // Buscar el índice del producto en this.#arrayCesta
    const index = this.#arrayCesta.findIndex(
      (item) => item.id === producto.mostrar().cod
    );

    // Verificar si el producto está en la cesta
    if (index !== -1) {
      // Eliminar el producto del array
      this.#arrayCesta.splice(index, 1);

      // Renderizar la cesta actualizada
      this.renderizarCesta();
    }
  }

  calcularTotales() {
    let total = 0;

    this.#arrayCesta.forEach((item) => {
      const producto = productos.find(
        (producto) => producto.mostrar().cod === item.id
      );
      if (producto) {
        total += producto.mostrar().precio * item.cantidad;
      }
    });

    const totalConIVA = total * 1.21;

    document.getElementById("total").innerText = total.toFixed(2);
    document.getElementById("totalIVA").innerText = totalConIVA.toFixed(2);
  }

  renderizarCesta() {
    const cestaCompra = document.getElementById("cestaCompra");
    cestaCompra.innerHTML = "";

    this.#arrayCesta.forEach((item) => {
      const producto = productos.find(
        (producto) => producto.mostrar().cod === item.id
      );

      if (producto) {
        const subtotal = producto.mostrar().precio * item.cantidad;

        const fila = document.createElement("tr");
        fila.innerHTML = `
                    <td>${producto.mostrar().cod}</td>
                    <td>${producto.mostrar().nombre}</td>
                    <td>${item.cantidad}</td>
                    <td>${producto.mostrar().precio.toFixed(2)}</td>
                    <td>${subtotal.toFixed(2)}</td>
                    <td><button class="btn btn-danger" id="botonDel-${
                      producto.mostrar().cod
                    }">X</button></td>
                `;

        cestaCompra.appendChild(fila);
        
        // Creamos un evento especifico para el botón, ligado al método eliminarProducto.
        const botonEliminar = document.getElementById(`botonDel-${producto.mostrar().cod}`);
        botonEliminar.addEventListener("click", () => {this.eliminarProducto(producto);});

      }
    });

    this.calcularTotales();
  }
}

class ContProductos {
  #arrayProductos = productos;
  cesta = new Cesta();

  constructor() {
    this.#mostrarProductos(this.#arrayProductos);
  }

  #mostrarProductos(arrayProductos) {
    arrayProductos.forEach((producto) => {
      let infoProducto = producto.mostrar();
      let divContenedor = document.getElementById("zonaDinamica");
      let divProducto = document.createElement("div");
      divProducto.className = "card";
      divProducto.style = "width: 10rem";

      let imagen = document.createElement("img");
      imagen.src = infoProducto.imagen;
      imagen.className = "card-img-top";

      let nombre = document.createElement("p");
      nombre.innerHTML = "<b>" + infoProducto.nombre + "</b>";
      nombre.className = "card-title";

      let precio = document.createElement("p");
      precio.innerText = infoProducto.precio + "€";
      nombre.className = "card-text";

      let input = document.createElement("input");
      input.setAttribute("data-iduni", infoProducto.cod);
      input.setAttribute("type", "number");
      input.setAttribute("value", "1");
      input.setAttribute("class", "inputArticulo");

      let boton = document.createElement("a");
      boton.className = "btn btn-primary";
      boton.innerText = "Añadir";
      boton.setAttribute("role", "button");
      boton.setAttribute("data-idbot", infoProducto.cod);
      boton.setAttribute("id", "botonArticulo-" + infoProducto.cod);
      boton.addEventListener("click", () => {
        this.cesta.enviarCesta(infoProducto.cod);
      });

      divProducto.appendChild(imagen);
      divProducto.appendChild(nombre);
      divProducto.appendChild(precio);
      divProducto.appendChild(input);
      divProducto.appendChild(boton);
      divContenedor.appendChild(divProducto);
    });
  }
}

window.addEventListener("load", () => new ContProductos());
