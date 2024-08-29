"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("./knexfile"));
const express_1 = __importDefault(require("express"));
const clienteController_1 = __importDefault(require("./controllers/clienteController"));
const knex = (0, knex_1.default)(knexfile_1.default.development);
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/clientes', clienteController_1.default.create);
app.get('/clientes', clienteController_1.default.findAll);
app.get('/clientes/:cpf', clienteController_1.default.findByCpf);
app.put('/clientes/:id', clienteController_1.default.update);
app.delete('/clientes/:id', clienteController_1.default.delete);
knex.migrate.latest()
    .then(() => {
    console.log('Migrações executadas com sucesso.');
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
})
    .catch((err) => {
    console.error('Erro ao executar migrações:', err);
});
