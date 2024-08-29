import { Request, Response } from 'express';
import ClienteRepository from '../repositories/clienteRepository';
import Cliente from '../models/cliente';

class ClienteController {
    static async create(req: Request, res: Response): Promise<void> {
        try {
            const { nome, cpf, dataNascimento, email } = req.body;
            const cliente = new Cliente(null, nome, cpf, dataNascimento, email);
            const newCliente = await ClienteRepository.create(cliente);
            res.status(201).json(newCliente);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    static async findAll(req: Request, res: Response): Promise<void> {
        try {
            const clientes = await ClienteRepository.findAll();
            res.json(clientes);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    static async findByCpf(req: Request, res: Response): Promise<void> {
        try {
            const cliente = await ClienteRepository.findByCpf(parseInt(req.params.cpf));
            if (!cliente) {
                res.status(404).json({ error: 'Cliente não encontrado' }); 
                return;
            }
            res.json(cliente);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        try {
            const { nome, cpf, dataNascimento, email } = req.body;
            const cliente = new Cliente(null, nome, cpf, dataNascimento, email);
            const updatedCliente = await ClienteRepository.update(parseInt(req.params.id), cliente);
            if (!updatedCliente){
                res.status(404).json({ error: 'Cliente não encontrado' });
                return;
            }
            res.json(updatedCliente);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    static async delete(req: Request, res: Response): Promise<void> {
        try {
            await ClienteRepository.delete(parseInt(req.params.id));
            res.status(204).send();
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default ClienteController;
