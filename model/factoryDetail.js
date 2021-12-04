const db = require('../database/database')

class FactoryDetail {
    tableName = `factory_details`

    getAll = async () => {
        const query = `SELECT * FROM ${this.tableName}`
        return await db.query(query)
    }
    getById = async (id) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "id" = ${id}`
        return await db.query(query)
    }
    getByName = async (brand) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "brand" = ${brand}`
        return await db.query(query)
    }
    getByDateRange = async (startDate, endDate) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "start_date" >= '${startDate}' AND "end_date" < '${endDate}'`
        return await db.query(query)
    }
    getByStartDate = async (startDate) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "start_date" = ${startDate}`
        return await db.query(query)
    }
    getByEndDate = async (endDate) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "end_date" = ${endDate}`
        return await db.query(query)
    }
    add = async (body) => {
        const query = `INSERT INTO ${this.tableName}("unit_used", "start_date", "end_date", "diff_date", "kilowatt_usage", "usage_fee", "discounted_price")
        VALUES ('${body.unit_used}','${body.start_date}','${body.end_date}',${body.diff_date},${body.kilowatt_usage},${body.usage_fee},${body.discounted_price})`
        return await db.query(query)
    }
    
}
module.exports = new FactoryDetail
