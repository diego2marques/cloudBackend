import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('clientes', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('cpf').unique().notNullable();
        table.date('dataNascimento').notNullable();
        table.string('email').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('clientes');
}

