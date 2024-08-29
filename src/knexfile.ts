import type { Knex } from 'knex';
import path from 'path';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'cloud-database.cfuy44yog0rz.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: 'Nuvem321!',
            database: 'cloud_database',
        },
        migrations: {
            directory: path.join(__dirname, 'migrations'),
            extension: 'ts',
        }
    },
};

export default config;
