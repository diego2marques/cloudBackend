"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clienteRepository_1 = __importDefault(require("../repositories/clienteRepository"));
const cliente_1 = __importDefault(require("../models/cliente"));
class ClienteController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, cpf, dataNascimento, email } = req.body;
                const cliente = new cliente_1.default(null, nome, cpf, dataNascimento, email);
                const newCliente = yield clienteRepository_1.default.create(cliente);
                res.status(201).json(newCliente);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    static findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield clienteRepository_1.default.findAll();
                res.json(clientes);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    static findByCpf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = yield clienteRepository_1.default.findByCpf(parseInt(req.params.cpf));
                if (!cliente) {
                    res.status(404).json({ error: 'Cliente não encontrado' });
                    return;
                }
                res.json(cliente);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, cpf, dataNascimento, email } = req.body;
                const cliente = new cliente_1.default(null, nome, cpf, dataNascimento, email);
                const updatedCliente = yield clienteRepository_1.default.update(parseInt(req.params.id), cliente);
                if (!updatedCliente) {
                    res.status(404).json({ error: 'Cliente não encontrado' });
                    return;
                }
                res.json(updatedCliente);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield clienteRepository_1.default.delete(parseInt(req.params.id));
                res.status(204).send();
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.default = ClienteController;
