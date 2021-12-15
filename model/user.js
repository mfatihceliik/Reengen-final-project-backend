const db = require('../database/database')
const bcrypt = require('bcrypt');

class Users {
    tableName = `users`

    getAll = async () => {
        const query = `SELECT * FROM ${this.tableName}`
        return await db.query(query)
    }
    getById = async (id) => {
        const query = `SELECT * FROM ${this.tableName} WHERE id = '${id}'`
        return await db.query(query)
    }
    getByEmail = async (email) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "email" = '${email}'`
        return await db.query(query)
    }
    findByEmail = async (email) => {
        const query = `SELECT users.id, users.first_name, users.last_name, users.email, users."password", roles.role
        FROM ${this.tableName}
        INNER JOIN roles on users."role" = roles.id
        WHERE "email" = '${email}'`;
        return await db.query(query)
    }
    register = async (body) => {
        body.password = bcrypt.hashSync(body.password, 10)
        const query = `INSERT INTO ${this.tableName} ("first_name", "last_name", "email", "password", "role") VALUES 
        ('${body.first_name}', '${body.last_name}', '${body.email}', '${body.password}', 2)`
        return await db.query(query)
    }
    update = async (body) => {
        const query = `UPDATE ${this.tableName}
        SET
        "first_name" = '${body.firstName}',
        "last_name" = '${body.lastName}',
        "email" = '${body.email}',
        "password" = '${body.password}'`
        return await db.query(query)
    }
}

module.exports = new Users