const db = require('../database/database')

class Factory {
    tableName = `factories`

    getAll = async () => {
        const query = `SELECT * FROM ${this.tableName} ORDER BY "id" ASC`
        return await db.query(query)
    }
    getById = async (id) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "id" = ${id}`
        return await db.query(query)
    }
    getByName = async (factoryName) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "factory_name" = '${factoryName}'`
        return await db.query(query)
    }
    getByMembershipDateRange = async (membership_date, membership_expiry_date) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "membership_date" >=  '${membership_date}' 
        AND "membership_expiry_date" <= '${membership_expiry_date}'`
        return await db.query(query)
    }
    getByMembershipDate = async (membership_date) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "membership_date" >= '${membership_date}'`
        return await db.query(query)
    }
    getByMembershipExpiryDate = async (membership_expiry_date) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "membership_expiry_date" <= '${membership_expiry_date}'`
        return await db.query(query)
    }
    update = async (id, body) => {
        const query = `UPDATE ${this.tableName}
        SET
        "factory_name" = '${body.factory_name}',
        "number_of_employees" = ${body.number_of_employees},
        "membership_date" = '${body.membership_date}',
        "membership_expiry_date" = '${body.membership_expiry_date}'
        WHERE "id" = ${id}`
        return await db.query(query)
    }
    add = async (body) => {
        const query = `INSERT INTO ${this.tableName} ("factory_name","number_of_employees","membership_date","membership_expiry_date")
        VALUES ('${body.factory_name}','${body.number_of_employees}','${body.membership_date}','${body.membership_expiry_date}')`
        return await db.query(query)
    }
    delete = async (id) => {
        const query = `DELETE FROM ${this.tableName} WHERE "id" = '${id}'`
        return await db.query(query)
    }
}
module.exports = new Factory