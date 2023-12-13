class Producto{
    #cod;
    #nombre;
    #precio;
    #imagen;

    constructor(cod,nombre,precio,imagen){
        this.#cod=cod;
        this.#nombre=nombre;
        this.#precio=precio;
        this.#imagen=imagen;

    }
    mostrarProducto(){
        return {
            cod: this.#cod,
            nombre: this.#nombre,
            precio: this.#precio,
            imagen:this.#imagen
        };
    }
}

// Creamos un array externo, donde replicaremos un acceso a la base de datos
var productos = [
    new Producto(1, "Renault Megane", 15000, "https://source.unsplash.com/random/400x400/?renault-megane"),
    new Producto(2, "Vestido Rojo", 29.99, "https://source.unsplash.com/random/400x400/?red-dress"),
    new Producto(3, "Taza café", 6.99, "https://source.unsplash.com/random/400x400/?cup-coffee"),
    new Producto(4, "Cámara reflex", 699.99, "https://source.unsplash.com/random/400x400/?canon-camera"),
    new Producto(5, "Iphone 8", 299.99, "https://source.unsplash.com/random/400x400/?iphone-8")
];

class Cesta {
    #arrayCesta = [];




}

class ContProductos{
    #arrayProductos = productos;
    constructor(){
        this.#mostrarProductos(this.#arrayProductos);
    }
    
    // Evento enviar articulo a Array cesta
    #enviarCesta(){
        let botonId = document.getElementById("botonArticulo");

    }

    #mostrarProductos(arrayProductos){
        arrayProductos.forEach(producto=>{
            let infoProducto = producto.mostrarProducto();

            // Capturamos el div contenedor
            let divContenedor = document.getElementById("zonaDinamica");

            // Creamos div para cada elemento
            let divProducto = document.createElement('div');
            divProducto.className="card";
            divProducto.style="width: 10rem";

            // creamos la imagen
            let imagen = document.createElement('img');
            imagen.src=infoProducto.imagen;
            imagen.className="card-img-top";

            // creamos el nombre del articulo
            let nombre = document.createElement('p');
            nombre.innerHTML = "<b>"+infoProducto.nombre+"</b>";
            nombre.className = "card-title";

            // Creamos el precio
            let precio = document.createElement('p');
            precio.innerText = infoProducto.precio + "€";
            nombre.className =  "card-text";

            //  Creamos un input
            let input = document.createElement('input');
        input.setAttribute("data-iduni", infoProducto.cod);
        input.setAttribute("type", "number");
        input.setAttribute("value", "1");
        input.setAttribute("class", "inputArticulo");

            // Creamos un boton
            let boton = document.createElement('a');
            boton.className = "btn btn-primary";
            boton.innerText = "Añadir";
            boton.setAttribute("role","button");
            boton.setAttribute("data-idbot", infoProducto.cod);
            boton.setAttribute("id", "botonArticulo-" + infoProducto.cod);
            boton.addEventListener('click', () => this.#enviarCesta(infoProducto.cod));

            divProducto.appendChild(imagen);
            divProducto.appendChild(nombre);
            divProducto.appendChild(precio);
            divProducto.appendChild(input);
            divProducto.appendChild(boton);
            divContenedor.appendChild(divProducto);


        });

    }
}

window.addEventListener('load',()=>new ContProductos);