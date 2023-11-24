class Articulo{
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
    mostrarArticulo(){
        return {
            cod: this.#cod,
            nombre: this.#nombre,
            precio: this.#precio,
            imagen:this.#imagen
        };
    }
}

class Cesta {
    #arrayArticulos = [];


}

class zonaCatalogo{
    #arrayArticulos;
    constructor(){
        this.#arrayArticulos = [
            new Articulo(1, "Renault Megane", 15000, "https://source.unsplash.com/random/400x400/?renault-megane"),
            new Articulo(2, "Vestido Rojo", 29.99, "https://source.unsplash.com/random/400x400/?red-dress"),
            new Articulo(3, "Taza café", 6.99, "https://source.unsplash.com/random/400x400/?cup-coffee"),
            new Articulo(4, "Cámara reflex", 699.99, "https://source.unsplash.com/random/400x400/?canon-camera"),
            new Articulo(5, "Bugatti Veyron", 1693900.99, "https://source.unsplash.com/random/400x400/?bugatti-veyron")
        ];
        this.#mostrarArticulos(this.#arrayArticulos);
    }
    
    // Evento enviar articulo a Array cesta
    #enviarCesta(){
        let botonId = document.getElementById("botonArticulo");

    }

    #mostrarArticulos(arrayArticulos){
        arrayArticulos.forEach(articulo=>{
            let infoArticulo = articulo.mostrarArticulo();

            // Capturamos el div contenedor
            let divContenedor = document.getElementById("zonaDinamica");

            // Creamos div para cada elemento
            let divArticulo = document.createElement('div');
            divArticulo.className="card";
            divArticulo.style="width: 12rem";

            // creamos la imagen
            let imagen = document.createElement('img');
            imagen.src=infoArticulo.imagen;
            imagen.className="card-img-top";

            // creamos el nombre del articulo
            let nombre = document.createElement('p');
            nombre.innerHTML = "<b>"+infoArticulo.nombre+"</b>";
            nombre.className = "card-title";

            // Creamos el precio
            let precio = document.createElement('p');
            precio.innerText = infoArticulo.precio;
            nombre.className =  "card-text";

            //  Creamos un input
            let input = document.createElement('input');
        input.setAttribute("data-id", infoArticulo.cod);
        input.setAttribute("type", "number");
        input.setAttribute("value", "1");
        input.setAttribute("class", "inputArticulo");

            // Creamos un boton
            let boton = document.createElement('a');
            boton.className = "btn btn-primary";
            boton.innerText = "Añadir";
            boton.setAttribute("role","button");
            boton.setAttribute("data-id", infoArticulo.cod);
            boton.setAttribute("id", "botonArticulo-" + infoArticulo.cod);
            boton.addEventListener('click', () => this.#enviarCesta(infoArticulo.cod));

            divArticulo.appendChild(imagen);
            divArticulo.appendChild(nombre);
            divArticulo.appendChild(precio);
            divArticulo.appendChild(input);
            divArticulo.appendChild(boton);
            divContenedor.appendChild(divArticulo);


        });

    }
}

window.onload = ()=>{
    new zonaCatalogo();
};