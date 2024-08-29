import Knex from 'knex';
import knexConfig from './knexfile';
import express from 'express';
import ClienteController from './controllers/clienteController';

const knex = Knex(knexConfig.development);
const app = express();
const port = 3000;

app.use(express.json());


app.post('/clientes', ClienteController.create);
app.get('/clientes', ClienteController.findAll);
app.get('/clientes/:cpf', ClienteController.findByCpf);
app.put('/clientes/:id', ClienteController.update);
app.delete('/clientes/:id', ClienteController.delete);

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