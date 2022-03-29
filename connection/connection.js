const mysql = require('mysql');

// se crea un pull de conexiones
const conexionDB = {
    connectionLimit: 10,
    host:'rds-serverless-indra.cxambc9xivas.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'Windows2022',
    port: '3306',
    database: 'serverless_Indra_1',
    debug: true
};

var pool = mysql.createPool(conexionDB);

module.exports = pool;