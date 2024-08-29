import pool from '../db';
import mysql from 'mysql2'; 
import Cliente from '../models/cliente';

class ClienteRepository {
    static async create(cliente: Cliente): Promise<Cliente> {
        const sql = 'INSERT INTO clientes (nome, cpf, dataNascimento, email) VALUES (?, ?, ?, ?)';
        const [result] = await pool.query(sql, [cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.email]);
        const insertId = (result as mysql.OkPacket).insertId;
        return new Cliente(insertId, cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.email);
    }

    static async findAll(): Promise<Cliente[]> {
        const sql = 'SELECT * FROM clientes';
        const [rows] = await pool.query(sql);
        return (rows as any[]).map(row => new Cliente(row.id, row.nome, row.cpf, row.dataNascimento, row.email));
    }

    static async findByCpf(cpf: number): Promise<Cliente | null> {
        const sql = 'SELECT * FROM clientes WHERE cpf = ?';
        const [rows] = await pool.query(sql, [cpf]);
        if ((rows as any[]).length === 0) return null;
        const row = (rows as any[])[0];
        return new Cliente(row.id, row.nome, row.cpf, row.dataNascimento, row.email);
    }

    static async update(id: number, cliente: Cliente): Promise<Cliente | null> {
        const sql = 'UPDATE clientes SET nome = ?, cpf = ? , dataNascimento = ?, email = ? WHERE id = ?';
        const [result] = await pool.query(sql, [cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.email, id]);
        if ((result as mysql.OkPacket).affectedRows === 0) return null;
        return new Cliente(id, cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.email);
    }

    static async delete(id: number): Promise<void> {
        const sql = 'DELETE FROM clientes WHERE id = ?';
        await pool.query(sql, [id]);
    }
}

export default ClienteRepository;
