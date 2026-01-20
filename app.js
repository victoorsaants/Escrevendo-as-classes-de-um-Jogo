class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Arus", 30, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Bjorn", 35, "guerreiro");
heroi2.atacar();
