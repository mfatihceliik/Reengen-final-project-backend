const db = require('../database/database')
const myExt = require('../middleware/myExt')

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
    getByFactoryId = async (id) => {
        const query = `SELECT * FROM ${this.tableName} WHERE "factory_id" = ${id}`
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
        const date_diff = myExt.dateDiffCalculator(body.start_date, body.end_date)
        console.log(date_diff)
        const query = `INSERT INTO ${this.tableName}("unit_used", "start_date", "end_date", "diff_date", "kilowatt_usage", "usage_fee", "discounted_price", "factory_id")
        VALUES ('${body.unit_used}','${body.start_date}','${body.end_date}',${date_diff},${body.kilowatt_usage},${body.usage_fee},${body.discounted_price}, ${body.factory_id})`
        return await db.query(query)
    }
    update = async (id, body) => {
        const date_diff = myExt.dateDiffCalculator(body.start_date, body.end_date)
        const query = `UPDATE ${this.tableName}
        SET
        "unit_used" = '${body.unit_used}',
        "start_date" = '${body.start_date}',
        "end_date" = '${body.end_date}',
        "diff_date" = ${date_diff},
        "kilowatt_usage" = ${body.kilowatt_usage},
        "usage_fee" = ${body.usage_fee},
        "discounted_price" = ${body.discounted_price},
        "factory_id" = ${body.factory_id}
        WHERE "id" = ${id}`
        return await db.query(query)
    }
    delete = async (id) => {
        const query = `DELETE FROM ${this.tableName} WHERE "id" = '${id}'`
        return await db.query(query)
    }

}
module.exports = new FactoryDetail
