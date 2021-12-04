const express = require('express')
const router = express.Router()
const FactoryController = require('../controller/factoryController')

router.get('/getAll', FactoryController.getAll)
router.get('/getById', FactoryController.getById)

module.exports = router