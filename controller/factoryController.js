const Factory = require('../model/factory')
const { SuccessResult, ErrorResult } = require('../utils/result')
const myExt = require('../middleware/myExt')

class FactoryController {
    
    getAll = async(req, res) => { 
        await Factory.getAll()
        .then(results => {
            myExt.factoryDateConverter(results.rows, results.rows.length)
            res.status(200).json(new SuccessResult(results.rows, "Factories  successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error"))
        })
        .catch(err => { res.status(402).json(new ErrorResult("Error occuredd: " + err))})
    } 
    getById = async(req, res) => {
        const id = parseInt(req.params.id)
        await Factory.getById(id)
        .then(result => {
            myExt.factoryDateConverter(result.rows, result.rows.length)
            res.status(200).json(new SuccessResult(result.rows[0], "Factory successfully fetch."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getByName = async(req, res) => {
        const factoryName = req.params.factory_name
        await Factory.getByName(factoryName)
        .then(result => {
            myExt.factoryDateConverter(result.rows, result.rows.length)
            res.status(200).json(new SuccessResult(result.rows[0], "Factory successfully sorted by name."))
        }, () => {
            res.status(403).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getByMembershipDateRange = async(req, res) => {
        const {membership_date, membership_expiry_date} = req.params
        await Factory.getByMembershipDateRange(membership_date, membership_expiry_date)
        .then(results => {
            myExt.factoryDateConverter(results.rows, results.rows.length)
            res.status(200).json(new SuccessResult(results.rows, "Factories successfully sorted by date range."))
        }, () => {
            res.status(403).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getByMembershipDate = async(req, res) => {
        const membershipDate = req.body.membership_date
        await Factory.getByMembershipDate(membershipDate)
        .then(results => {
            myExt.factoryDateConverter(results.rows, results.rows.length)
            res.status(200).json(new SuccessResult(results.rows, "Factories successfully sorted by membership date."))
        }, () => {
            res.status(403).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    getByMembershipExpiryDate = async(req, res) => {
        const membership_expiry_date = req.body.membership_expiry_date
        await Factory.getByMembershipExpiryDate(membership_expiry_date)
        .then(results => {
            myExt.factoryDateConverter(results.rows, results.rows.length)
            res.status(200).json(new SuccessResult(results.rows, "Factories successfully sorted by membership expiry date."))
        }, () => {
            res.status(403).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) })
    }
    add = async (req, res) => {
        const body = req.body;
        await Factory.add(body)
        .then(result => {
            res.status(200).json(new SuccessResult(result.rows, "Factory successfully added."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) }) 
    }
    update = async (req, res) => {
        const id = parseInt(req.params.id);
        const body = req.body;
        await Factory.update(id, body)
        .then(result => {
            res.status(200).json(new SuccessResult(result.rows, "Factory successfully updated."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) }) 
    }
    delete = async (req, res) => {
        const id = parseInt(req.params.id)
        console.log("id: " + id);
        await Factory.delete(id)
        .then(result => {
            res.status(200).json(new SuccessResult(result.rows, "Factory successfully deleted."))
        }, () => {
            res.status(402).json(new ErrorResult("Unexpected error."))
        })
        .catch(err => { console.log("Error occured: " + err) }) 
    }
}

module.exports = new FactoryController