const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'toys_store',
    password: 'admin123',
    port: 5432,
});

module.exports = pool;