const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');

const db = new Database('./users.db');

// Create table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`).run();

// Insert admin if not exists
const adminPassword = bcrypt.hashSync('admin', 10);
db.prepare(`
  INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)
`).run('admin', adminPassword);

module.exports = db;
