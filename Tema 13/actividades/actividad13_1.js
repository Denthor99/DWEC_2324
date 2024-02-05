"use strict";
class GrupoBot {
    constructor() {
        this.contador = 0;
    }
    add() {
        this.contador++;
        const boton = new Boton(this.contador);
        $('#buttonParty').append(`<button id="boton${this.contador}">${this.contador}</button>`);
    }
    rest() {
        if (this.contador > 0) {
            $(`#boton${this.contador}`).remove();
            this.contador--;
        }
    }
}
class Boton {
    constructor(contador) {
        $(`#boton${contador}`).on('click', () => {
            alert(`Hola desde ${contador}`);
        });
    }
}
$(function () {
    const funcionesBot = new GrupoBot();
    $('#addButton').on('click', function () {
        funcionesBot.add();
    });
    $('#delButton').on('click', function () {
        funcionesBot.rest();
    });
});
