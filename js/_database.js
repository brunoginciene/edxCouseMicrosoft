//database
const pg = require('pg');

const client = new pg.Client({
    host: 'localhost',
    user: 'gitpod',
    password: 'postgres',
    database: 'postgres',
    port: 5432
});

module.exports = client