const Factory = require('../model/factory')
const { SuccessResult, ErrorResult } = require('../utils/result')

class FactoryController {
    
    getAll = async(req, res) => { 
        await Factory.getAll()
        .then(results => {
            res.status(200).json(new SuccessResult(results.rows, "Factories  successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error"))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getById = async(req, res) => {
        const id = req.body.id
        await Factory.getById(id)
        .then(result => {
            res.status(200).json(new SuccessResult(result.rows[0], "Factory successfully fetch."))
        })
    }
}
module.exports = new FactoryController