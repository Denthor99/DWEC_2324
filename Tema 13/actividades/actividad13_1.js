"use strict";
class GrupoBot {
    constructor() {
        this.contador = 0;
        new Boton(this.contador);
    }
    add() {
        this.contador++;
        return this.contador;
    }
    res() {
        if (this.contador > 0) {
            this.contador--;
        }
        return this.contador;
    }
}
class Boton {
    constructor(contador) {
        alert("Hola desde " + contador);
    }
}
$(function () {
    const grupoBot = new GrupoBot();
    $("#addButton").on("click", function () {
        $("#buttonParty").append(`<button>${grupoBot.add()}</button>`);
    });
});
