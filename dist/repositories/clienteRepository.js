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
const db_1 = __importDefault(require("../db"));
const cliente_1 = __importDefault(require("../models/cliente"));
class ClienteRepository {
    static create(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO clientes (nome, cpf, dataNascimento, email) VALUES (?, ?, ?, ?)';
            const [result] = yield db_1.default.query(sql, [cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.email]);
            const insertId = result.insertId;
            return new cliente_1.default(insertId, cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.email);
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM clientes';
            const [rows] = yield db_1.default.query(sql);
            return rows.map(row => new cliente_1.default(row.id, row.nome, row.cpf, row.dataNascimento, row.email));
        });
    }
    static findByCpf(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM clientes WHERE cpf = ?';
            const [rows] = yield db_1.default.query(sql, [cpf]);
            if (rows.length === 0)
                return null;
            const row = rows[0];
            return new cliente_1.default(row.id, row.nome, row.cpf, row.dataNascimento, row.email);
        });
    }
    static update(id, cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'UPDATE clientes SET nome = ?, cpf = ? , dataNascimento = ?, email = ? WHERE id = ?';
            const [result] = yield db_1.default.query(sql, [cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.email, id]);
            if (result.affectedRows === 0)
                return null;
            return new cliente_1.default(id, cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.email);
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'DELETE FROM clientes WHERE id = ?';
            yield db_1.default.query(sql, [id]);
        });
    }
}
exports.default = ClienteRepository;
