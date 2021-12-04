const express = require('express')
const router = express.Router()
const FactoryDetailController = require('../controller/factoryDetailController')

router.get('/getAll', FactoryDetailController.getAll)
router.get('/getById', FactoryDetailController.getById)
router.get('/getByDateRange', FactoryDetailController.getByDateRange)

router.post('/add', FactoryDetailController.add)

module.exports = router