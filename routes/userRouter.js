const express = require('express')
const router = express.Router()
const UserController = require('../controller/userController')

router.get('/getAll', UserController.getAll)
router.get('/getById', UserController.getById)
router.get('/getByEmail', UserController.getByEmail)
router.get('/findByEmail', UserController.getByEmail)

router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router