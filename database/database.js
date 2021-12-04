const pgAdmin = require('pg');
const dotenv = require('dotenv').config()

class Database {
    constructor() {
      this.server = new pgAdmin.Client({
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.PORT
      });
      this.server.connect() 
    }
}

module.exports = new Database().server

  