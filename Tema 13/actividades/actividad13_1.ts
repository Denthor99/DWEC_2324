interface funBotones {
    add(): number;
    res(): number;
}

class GrupoBot implements funBotones {
    private contador: number = 0;

    constructor() {
        new Boton(this.contador);
    }

    add(): number {
        this.contador++;
        return this.contador;
    }

    res(): number {
        if (this.contador > 0) {
            this.contador--;
        }
        return this.contador;
    }
}

class Boton {
    constructor(contador: number) {
        alert("Hola desde " + contador);
    }
}

$(function() {
    const grupoBot = new GrupoBot();
    $("#addButton").on("click", function() {
        $("#buttonParty").append(`<button>${grupoBot.add()}</button>`);
    });
});