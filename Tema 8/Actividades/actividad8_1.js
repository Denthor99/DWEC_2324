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
    #arrayArticulos = [new Articulo(1,"Renault Megane",15000,"https://source.unsplash.com/random/400x400/?renault-megane"),
    new Articulo(2,"Vestido Rojo",29.99,"https://source.unsplash.com/random/400x400/?red-dress"),
    new Articulo(3,"Taza café",6.99,"https://source.unsplash.com/random/400x400/?cup-coffee"),
    new Articulo(4,"Camára reflex",699.99,"https://source.unsplash.com/random/400x400/?canon-camera")
    ];

    #mostrarArticulos(arrayArticulos){
        for (let i = 0; i<arrayArticulos.lenght; i++) {
            var div1=document.createElement("div");
            var atDiv1= div1.setAttribute("class","card");
            
        }

    }

}