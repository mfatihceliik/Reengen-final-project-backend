const User = require('../model/user')
const { SuccessResult, SuccessLoginResult, ErrorResult } = require('../utils/result')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

class UserController {

    getAll = async (req, res) => {
        await User.getAll()
            .then(results => {
                res.status(200).json(new SuccessResult(results.rows, "Users successfully fetch."));
            }, () => {
                res.status(401).json(new ErrorResult("Unexpected error."));
            })
            .catch(err => { console.log("Error occured: " + err) })
    }
    getById = async (req, res) => {
        const id = req.body.id
        await User.getById(id)
            .then(result => {
                res.status(200).json(new SuccessResult(result.rows[0], "User successfully fetch."))
            }, () => {
                res.status(401).json(new ErrorResult("Unexpected error."))
            })
            .catch(err => { console.log("Error occured: " + err) })
    }
    getByEmail = async (req, res) => {
        const email = req.body.email
        await User.getByEmail(email)
            .then(result => {
                res.status(200).json(new SuccessResult(result.rows[0], "User successfully fetch."))
            }, () => {
                res.status(401).json(new ErrorResult("Request body empty."))
            })
            .catch(err => { console.log("Error occured: " + err) })
    }
    findByEmail = async (req, res) => {
        const email = req.body.email
        await User.findByEmail(email)
            .then(result => {
                res.status(200).json(new SuccessResult(result.rows[0], "User successfully fetch."))
            }, () => {
                res.status(401).json(new ErrorResult("Unexpected error."))
            })
            .catch(err => { console.log("Error occured: " + err) })
    }
    login = async (req, res) => {
        const { email, password } = req.body
        let user
        await User.findByEmail(email)
            .then(result => {
                if (result.length == 0) { res.status(401).json(new ErrorResult("Email or password wrong.")) }
                user = result.rows[0]
            }, () => {
                res.status(401).json(new ErrorResult("Unexpected error."))
            })
            .catch(err => { console.log("Error occured: " + err) })
        if (user != null) {
            const passwordMatch = await bcrypt.compare(password, user.password)
            if (passwordMatch) {
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60)
                }, process.env.TOKEN_SECRET)
                delete user.id
                delete user.password
                res.status(200).json(new SuccessLoginResult(user, token, "User successfully login."))
            } else {
                res.status(402).json(new ErrorResult("Email or password wrong."))
            }
        }


    }
    register = async (req, res) => {
        const user = req.body
        await User.register(user)
            .then(result => {
                res.status(200).json(new SuccessResult(result.rows, "User successfully created."))
            }, () => {
                res.status(401).json(new ErrorResult("Unexpected error."))
            })
            .catch(err => { console.log("Error occured: " + err) })
    }
}
module.exports = new UserController