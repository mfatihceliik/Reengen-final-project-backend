const FactoryDetail = require('../model/factoryDetail')
const { SuccessResult, ErrorResult } = require('../utils/result')


class FactoryDetailController {
    getAll = async(req, res) => {
        await FactoryDetail.getAll()
        .then(results => {
            dateConverter(results.rows, results.rows.length)
            res.status(200).json(new SuccessResult(results.rows, "Factory details successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getById = async(req,res) => {
        const id = req.body.id
        await FactoryDetail.getById(id)
        .then(result => {
            dateConverter(result.rows, result.rows.length)
            res.status(200).json(new SuccessResult(result.rows[0], "Factory detail successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getByDateRange = async(req, res) => {
        const start_date = req.body.startDate
        const end_date = req.body.endDate
        console.log(start_date)
        await FactoryDetail.getByDateRange(start_date, end_date)
        .then(results => {
            dateConverter(results.rows, results.rows.length)
            res.status(200).json(new SuccessResult(results.rows, "Date range successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    add = async(req, res) => {
        let body = req.body
        await FactoryDetail.add(body)
        .then(result => {
            dateConverter(result.rows, result.rows.length)
            res.status(200).json(new SuccessResult(body, "Factory detail successfully added."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
}

function dateConverter(result_rows, resultLength) {
    for(let i = 0; i < resultLength; i++) {
        const _startDate = (new Date(`${result_rows[i].start_date}`)).toISOString().split('T')[0];
        const _endDate = (new Date(`${result_rows[i].end_date}`)).toISOString().split('T')[0];
        result_rows[i].start_date = _startDate
        result_rows[i].end_date = _endDate
    }
}

module.exports = new FactoryDetailController