import mysql from 'mysql2/promise';

// Configuração da conexão com o banco de dados
const pool = mysql.createPool({
    host: 'cloud-database.cfuy44yog0rz.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Nuvem321!',
    database: 'cloud_database',
});

export default pool;
