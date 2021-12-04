const db = require('../database/database')

class Factory {
    tableName = `factories`

    getAll = async() => {
        const query = `SELECT * FROM ${this.tableName}`
        return await db.query(query)
    }
    getById = async(id) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "id" = ${id}`
        return await db.query(query)
    }
    getByName = async (factoryName) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "factory_name" = ${factoryName}`
        return await db.query(query)
    }
    getByMembershipDateRange = async (membership_date, membership_expiry_date) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "membership_date" >=  '${membership_date}' 
        AND "membership_expiry_date" <= '${membership_expiry_date}'`
        return await db.query(query)
    }
    getByMembershipDate = async(membership_date) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "membership_date" >= '${membership_date}'`
        return await db.query(query)
    }
    getByMembershipExpiryDate = async(membership_expiry_date) => {
        const query = `SELECET * FROM ${this.tableName} WHERE "membership_expiry_date" >= '${membership_expiry_date}'`
        return await db.query(query)
    }
}
module.exports = new Factory