const FactoryDetail = require('../model/factoryDetail')
const { SuccessResult, ErrorResult } = require('../utils/result')
const myExt = require('../middleware/myExt')


class FactoryDetailController {
    getAll = async(req, res) => {
        await FactoryDetail.getAll()
        .then(results => {
            myExt.dateConverter(results.rows, results.rows.length)
            res.status(200).json(new SuccessResult(results.rows, "Factory details successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getById = async(req,res) => {
        const id = parseInt(req.params.id)
        await FactoryDetail.getById(id)
        .then(result => {
            myExt.dateConverter(result.rows, result.rows.length)
            res.status(200).json(new SuccessResult(result.rows[0], "Factory detail successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getByFactoryId = async (req, res) => {
        const id = parseInt(req.params.id)
        await FactoryDetail.getByFactoryId(id)
        .then(results => {
            myExt.dateConverter(results.rows, results.rows.length)
            res.status(200).json(new SuccessResult(results.rows, "Factory detail successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getByDateRange = async(req, res) => {
        const start_date = req.params.start_date
        const end_date = req.params.end_date
        await FactoryDetail.getByDateRange(start_date, end_date)
        .then(results => {
            myExt.dateConverter(results.rows, results.rows.length)
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
            myExt.dateConverter(result.rows, result.rows.length)
            res.status(200).json(new SuccessResult(body, "Factory detail successfully added."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    update = async (req, res) => {
        const id = parseInt(req.params.id)
        const body = req.body
        await FactoryDetail.update(id, body)
        .then(result => {
            res.status(200).json(new SuccessResult(result.rows, "Factory detail successfully updated."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    delete = async (req, res) => {
        const id = parseInt(req.params.id)
        await FactoryDetail.delete(id)
        .then(result => {
            res.status(200).json(new SuccessResult(result, "Factory detail successfully deleted."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
}


module.exports = new FactoryDetailController