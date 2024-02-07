/**
 * interface BotonesInterface:
 *  Definimos una interfaz, donde en su interior se encuentra definidos dos métodos que no retornarán un valor (void)
 */
interface BotonesInterface {
    add(): void;
    rest(): void;
}

/**
 * Clase GrupoBot:
 * Heredamos de la interfaz los métodos add y rest. Además, creamos un variable con visibilidad
 * privada, la cual inicializaremos a 0.
 */
class GrupoBot implements BotonesInterface {
    private contador: number = 0;

    constructor(){}

    /**
     * Método add():
     * Método que no devuelve nada, cuyo funcionamiento consiste en que cada vez que se pulse
     * el botón ligado a esta función, primero aumente el valor del contador y después añada un botón
     * con ese valor al div cuyo id es "buttonParty". Además, instanciamos la clase Botón y le pasamos el
     * valor del contador
     */
    add(): void {
        this.contador++;
        $('#buttonParty').append(`<button id="boton${this.contador}">${this.contador}</button>`);
        new Boton(this.contador);
    }

    /**
     * Método rest():
     * Método que no devuelve nada, y cuyo funcionamiento consiste en que, si el contador supera
     * a 0, elimina el botón seleccionado según el id de dicho botón. Además, reduce el valor del contador
     * una vez eliminado
     */
    rest(): void {
        if (this.contador > 0) {
            $(`#boton${this.contador}`).remove();
            this.contador--;
        }
    }
}

/**
 * Clase Botón:
 * Esta clase se usa para añadir al botón creado por el método add de la clase GrupoBot un alert asociado a un evento de tipo "click".
 * Se le pasará en el constructor el valor del contador (valor númerico)
 */
class Boton {
    constructor(contador: number) {
        $(`#boton${contador}`).on('click', function() {
            alert(`Hola desde ${contador}`);
        });
    }
}

/**
 * Evento onload (JQuery)
 * Añadimos al evento "onload" la instancia de la clase principal (GrupoBot).
 * Además, añadimos los correspondientes eventos (onclick) para darle funcionalidad a los botones creados en el HTML
 */
$(function() {
    const funcionesBot = new GrupoBot();
    $('#addButton').on('click', function() {
        funcionesBot.add();
    });

    $('#delButton').on('click', function() {
        funcionesBot.rest();
    });
});
