import mysql from 'mysql2';

// Crie a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost', // Ou o host do seu banco de dados na nuvem
    user: 'admin',
    password: 'Nuvem321!',
    database: 'cloud_database'
});

// Conecte ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL com sucesso!');

        // Faça um teste simples, como selecionar todos os registros de uma tabela
        connection.query('SELECT * FROM sua_tabela', (err, results) => {
            if (err) {
                console.error('Erro ao executar a consulta:', err);
            } else {
                console.log('Resultados da consulta:', results);
            }

            // Encerre a conexão após o teste
            connection.end();
        });
    }
});