const express = require('express')
const router = express.Router()
const UserController = require('../controller/userController')
const auth = require('../middleware/auth')

// GET
router.get('/getAll', auth(), UserController.getAll)
router.get('/getById', auth(), UserController.getById)
router.get('/getByEmail', auth(), UserController.getByEmail)
router.get('/findByEmail', auth(), UserController.getByEmail)

// POST

router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router