const Database = require('better-sqlite3');
const db = new Database('my-db', {verbose: console.log})


db.prepare(`
        CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            lastname TEXT NOT NULL,
            review TEXT NOT NULL            
        )
    `).run();

    