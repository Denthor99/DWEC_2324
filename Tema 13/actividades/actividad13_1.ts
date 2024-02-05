interface BotonesInterface {
    add(): void;
    rest(): void;
}

class GrupoBot implements BotonesInterface {
    private contador: number = 0;

    constructor() {
    }

    add(): void {
        this.contador++;
        const boton = new Boton(this.contador);
        $('#buttonParty').append(`<button id="boton${this.contador}">${this.contador}</button>`);
    }

    rest(): void {
        if (this.contador > 0) {
            $(`#boton${this.contador}`).remove();
            this.contador--;
        }
    }
}

class Boton {
    constructor(contador: number) {
        $(`#boton${contador}`).on('click', () => {
            alert(`Hola desde ${contador}`);
        });
    }
}

$(function() {
    const funcionesBot = new GrupoBot();
    $('#addButton').on('click', function() {
        funcionesBot.add();
    });

    $('#delButton').on('click', function() {
        funcionesBot.rest();
    });
});
