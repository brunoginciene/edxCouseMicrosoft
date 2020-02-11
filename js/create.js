const db = require('./_database')

async function createTables(){
    await db.connect()

    await db.query(`CREATE TABLE table_2(
        id serial PRIMARY KEY,
        nome VARCHAR(50) UNIQUE NOT NULL
    )`)

    await db.query(`CREATE TABLE table_3(
        id serial PRIMARY KEY,
        nome VARCHAR(50) UNIQUE NOT NULL
    )`)

    await db.end()

    console.log("Tabela criada");
}

createTables()