"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(id, nome, cpf, dataNascimento, email) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.email = email;
    }
}
exports.default = Cliente;
