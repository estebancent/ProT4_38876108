import mysqlConnection from 'mysql2/promise';

const properties = {
    host: 'localhost:8080',
    user: 'root',
    password: '',
    database: 'rest-api'
};

export const pool = mysqlConnection.createPool(properties);