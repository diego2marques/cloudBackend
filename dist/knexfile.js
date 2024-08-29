"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'cloud-database.cfuy44yog0rz.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: 'Nuvem321!',
            database: 'cloud_database',
        },
        migrations: {
            directory: path_1.default.join(__dirname, 'migrations'),
            extension: 'ts',
        }
    },
};
exports.default = config;
